/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (!board || !word) {
    return false;
  }

  const rowLen = board.length;
  const colLen = board[0].length;

  function dfs(r, c, index) {
    if (index === word.length) {
      return true;
    }

    if (r < 0 || r >= rowLen || c < 0 || c >= colLen || board[r][c] !== word[index]) {
      return false;
    }

    const tmp = board[r][c];
    board[r][c] = '$';

    const found = dfs(r + 1, c, index + 1) ||
                  dfs(r - 1, c, index + 1) ||
                  dfs(r, c + 1, index + 1) ||
                  dfs(r, c - 1, index + 1);

    board[r][c] = tmp;

    return found;
  }

  for (let row = 0; row < rowLen; ++row) {
    for (let col = 0; col < colLen; ++col) {
      if (dfs(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
};
