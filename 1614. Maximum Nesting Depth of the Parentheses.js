/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let ans = 0;
  let stack = [];

  for (let char of s) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      ans = Math.max(ans, stack.length);
      stack.pop();
    }
  }

  return ans;
};
