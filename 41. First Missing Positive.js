/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let containOne = false;
  let n = nums.length;

  for (let i = 0; i < n; ++i) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = 1;
    } else if (nums[i] === 1) {
      containOne = true;
    }
  }

  if (!containOne) return 1;

  for (let i = 0; i < n; ++i) {
    let value = Math.abs(nums[i]);

    if (value === n) {
      nums[0] = -Math.abs(nums[0]);
    } else {
      nums[value] = -Math.abs(nums[value]);
    }
  }

  for (let i = 1; i < n; ++i) {
    if (nums[i] > 0) return i;
  }

  if (nums[0] > 0) return n;

  return n + 1;
};
