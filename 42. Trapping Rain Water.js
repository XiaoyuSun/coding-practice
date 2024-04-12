/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  let ans = 0;

  while (left < right) {
    if (height[right] > height[left]) {
      height[left] > maxLeft
        ? (maxLeft = height[left])
        : (ans += maxLeft - height[left]);
      ++left;
    } else {
      height[right] > maxRight
        ? (maxRight = height[right])
        : (ans += maxRight - height[right]);
      --right;
    }
  }

  return ans;
};
