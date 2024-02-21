/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
//  2 = 000010
//  3 = 000011
//  4 = 000100
//  5 = 000101
//  6 = 000110
//  7 = 000111
//  8 = 001000
//  9 = 001001
// 10 = 001010
// 11 = 001011
// 12 = 001100
// 17 = 010001
// 0101
// 0110
// 0111
// 0100 = res = 4
var rangeBitwiseAnd = function (left, right) {
  if (left === 0 || right === 0) return 0;
  if (left === 1 && left !== right) return 0;
  if (left === right) return left;

  for (let i = 1; i <= 31; i++) {
    if (left >= 2 ** i && right >= 2 ** i && left < 2 ** (i + 1) && right < 2 ** (i + 1)) {
      return 2 ** i + rangeBitwiseAnd(left - 2 ** i, right - 2 ** i)
    }
  }

  return 0;
};
