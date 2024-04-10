/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  if (nums.length < k) return 0;

  let maxNum = -Infinity;
  let maxCount = 0;

  for (let num of nums) {
    maxNum = Math.max(maxNum, num);
  }

  for (let num of nums) {
    if (num === maxNum) ++maxCount;
  }

  if (maxCount < k) return 0;

  let left = 0;
  maxCount = 0;

  let count = 0;

  for (let right = 0; right < nums.length; ++right) {
    if (nums[right] === maxNum) {
      ++maxCount;
    }

    while (maxCount >= k) {
      count += nums.length - right;

      if (nums[left] === maxNum) {
        --maxCount;
      }

      ++left;
    }
  }

  return count;
};
