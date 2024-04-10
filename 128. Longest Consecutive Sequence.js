/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length <= 1) return nums.length;

  nums.sort((a, b) => a - b);

  let index = 0;
  let max = 0;
  let set = new Set();

  while (index < nums.length) {
    if (
      nums.at(index) + 1 === nums.at(index + 1) ||
      nums.at(index) === nums.at(index + 1)
    ) {
      // count += 1 ;
      set.add(nums.at(index));
      set.add(nums.at(index + 1));
    } else {
      max = Math.max(set.size, max);
      set.clear();
    }

    index++;
  }

  return max;
};
