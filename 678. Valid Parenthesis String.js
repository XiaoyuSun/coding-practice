/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let stack = [];
  let tmpStack = [];

  for (let char of s) {
    if (char === "(" || char === "*") {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        while (stack.length > 0 && stack.at(-1) === "*") {
          tmpStack.push(stack.pop());
        }

        if (stack.length === 0) {
          tmpStack.pop();
        } else {
          stack.pop();
        }

        while (tmpStack.length > 0) {
          stack.push(tmpStack.pop());
        }
      }
    }
  }

  let startCount = 0;

  while (stack.length > 0) {
    let top = stack.pop();

    if (top === "*") {
      ++startCount;
    } else {
      if (startCount <= 0) {
        return false;
      } else {
        --startCount;
      }
    }
  }

  return true;
};
