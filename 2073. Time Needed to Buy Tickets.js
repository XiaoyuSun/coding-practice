/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let ans = 0;

  while (tickets[k] > 0) {
    for (let index in tickets) {
      if (tickets[k] === 0) break;
      if (tickets[index] > 0) {
        ++ans;
        tickets[index] -= 1;
      }
    }
  }

  return ans;
};
