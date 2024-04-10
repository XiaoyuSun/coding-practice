/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 0) return [[]];
  if (nums.length === 1) return [[nums[0]]];

  let res = [];

  for (let i in nums) {
    let tmp = nums.shift();
    let perms = permute(nums);

    for (let perm of perms) {
      res.push([...perm, tmp]);
    }
    nums.push(tmp);
  }

  return res;
};
