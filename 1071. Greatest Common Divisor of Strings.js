/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str2.length === 0) return '';
  if (str1.length === str2.length) {
    return str1 === str2 ? str1 : '';
  }

  function helper(s, t) {
    if (s.length === t.length) {
      return s === t ? s : '';
    }

    let index = 0;

    while (index < s.length && index < t.length) {
      if (s[index] !== t[index]) {
        return '';
      }

      index += 1;
    }

    if (index < s.length) {
      return helper(s.substring(index), t);
    }

    if (index < t.length) {
      return helper(s, t.substring(index))
    }
  }

  return helper(str1, str2);
};
