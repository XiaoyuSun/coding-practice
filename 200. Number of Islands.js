/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }
  let count = 0;
  const numRows = grid.length;
  const numCols = grid[0].length;

  function dfs(row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= numRows ||
      col >= numCols ||
      grid[row][col] !== "1"
    ) {
      return;
    }
    grid[row][col] = "0"; // Mark the cell as visited by setting it to '0'
    // Explore the adjacent cells in all four directions
    dfs(row - 1, col); // Up
    dfs(row + 1, col); // Down
    dfs(row, col - 1); // Left
    dfs(row, col + 1); // Right
  }

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (grid[i][j] === "1") {
        count++; // Found an island
        dfs(i, j); // Perform DFS to mark all connected land cells
      }
    }
  }
  return count;
};
