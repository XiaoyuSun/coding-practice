/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = [];
  let remaining = num.length - k;

  for (let i = 0; i < num.length; i++) {
    while (k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }

  // Remove the remaining digits from the end
  stack.length = remaining;

  // Remove leading zeros
  while (stack.length && stack[0] === "0") {
    stack.shift();
  }

  // If the stack is empty, return "0"
  return stack.length ? stack.join("") : "0";
};
