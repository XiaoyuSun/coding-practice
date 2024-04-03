/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length === 1) return true;

  let index = 0;
  let maps = new Map();
  let sett = new Set();

  while (index < s.length) {
    let alreadyInMap = maps.get(s[index]);
    let alreadyInSet = sett.has(t[index]);

    if (alreadyInMap && alreadyInMap !== t[index]) {
      return false;
    }

    if (!alreadyInMap && alreadyInSet) {
      return false;
    }

    maps.set(s[index], t[index]);
    sett.add(t[index]);

    index += 1;
  }

  return true;
};
