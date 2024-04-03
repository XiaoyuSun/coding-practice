/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let ans = 0;

  for (let i = s.length - 1; i >= 0; --i) {
    if (s[i] !== " ") {
      ans += 1;
    } else {
      if (ans > 0) {
        return ans;
      }
    }
  }

  return ans;
};
