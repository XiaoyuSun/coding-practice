/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
  let ans = [];

  for (let i = 0; i < land.length; ++i) {
    for (let j = 0; j < land[i].length; ++j) {
      if (
        land[i][j] === 1 &&
        (i === 0 || land[i - 1][j] === 0) &&
        (j === 0 || land[i][j - 1] === 0)
      ) {
        let r = i;
        let c = j;

        while (r + 1 < land.length && land[r + 1][j] === 1) {
          ++r;
        }

        while (c + 1 < land[i].length && land[i][c + 1] === 1) {
          ++c;
        }

        ans.push([i, j, r, c]);

        for (let a = i; a <= r; ++a) {
          for (let b = j; b <= c; ++b) {
            land[a][b] = 0;
          }
        }
      }
    }
  }
  return ans;
};
