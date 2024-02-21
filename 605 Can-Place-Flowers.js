/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {

  let count = n;
  let index = 0;

  while (index < flowerbed.length) {
    if (count === 0) return true;

    if (flowerbed[index] === 0
      && (flowerbed[index + 1] === 0 || flowerbed[index + 1] === undefined)
      && (flowerbed[index - 1] === 0 || flowerbed[index - 1] === undefined)
    ) {
      flowerbed[index] = 1;
      count -= 1;
    }

    index += 1;
  }

  return count === 0;
};
