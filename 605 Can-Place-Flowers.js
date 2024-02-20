/**
* @param {number[]} flowerbed
* @param {number} n
* @return {boolean}
*/
var canPlaceFlowers = function(flowerbed, n) {
  let count = n;
  let index = 0;
  
  console.log(flowerbed)
  
  while (index < flowerbed.length) {
    console.log('index', index, 'count',count)
    if (count === 0) return true;
    if (index === 0 && flowerbed[index+1] === 0 && flowerbed[index] === 0 ) {
      index
      flowerbed[index] = 1;
      count -= 1;
    }
    
    if (flowerbed[index-1] === 0 && flowerbed[index+1] === 0 && flowerbed[index] === 0) {
      index
      flowerbed[index] = 1;
      count -= 1;
    }

    if (index === flowerbed.length - 1 && flowerbed[index] === 0 && flowerbed[index-1] === 0) {
      index
      flowerbed[index] = 1;
      count -= 1
    }

    index += 1;
  }
  count
  return count === 0;
};

console.log(canPlaceFlowers([0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0], 6));
