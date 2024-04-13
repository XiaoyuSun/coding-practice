/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (matrix.length === 0) return 0;

  const rows = matrix.length;
  const cols = matrix[0].length;

  // Convert each row to histogram representation
  const heights = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === "1") {
        heights[i][j] = i === 0 ? 1 : heights[i - 1][j] + 1;
      }
    }
  }

  // Function to calculate maximum area histogram
  const calculateMaxArea = (heights) => {
    const stack = [];
    let maxArea = 0;
    let i = 0;
    while (i <= heights.length) {
      const currentHeight = i === heights.length ? 0 : heights[i];
      if (
        stack.length === 0 ||
        currentHeight >= heights[stack[stack.length - 1]]
      ) {
        stack.push(i);
        i++;
      } else {
        const top = stack.pop();
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, heights[top] * width);
      }
    }
    return maxArea;
  };

  let maxRectangle = 0;

  // Calculate maximum area rectangle
  for (let i = 0; i < rows; i++) {
    maxRectangle = Math.max(maxRectangle, calculateMaxArea(heights[i]));
  }

  return maxRectangle;
};
