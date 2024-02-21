/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let res = []
  let max = 0;
  for (let num of candies) {
    max = Math.max(max, num)
  }

  for (let index in candies) {
    res.push(candies[index] + extraCandies >= max)
  }

  return res;
};
