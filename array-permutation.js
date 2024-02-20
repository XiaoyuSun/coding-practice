console.log('Array Permutation Solution');

let arr1 = [10,5,8,6];
let arr2 = [1, 2, 5, 3, 7,9,10,11,12,13];

let targetValue = 6;
let times = 0;
let permutationResults = []

const insert = (arr, position, value) => {
  return [...arr.slice(0, position), value, ...arr.slice(position)]
}

const permutation = (inputArr) => {
  let resArr = [];

  for (let i=0; i< inputArr.length; i++) {
    if (resArr.length === 0) {
      resArr.push([inputArr[i]])
    } else {
      let tmpArr = [];

      while (resArr.length > 0) {
        let subarr = resArr.pop();

        for (let time=0; time<subarr.length+1; time++) {
          tmpArr.push(insert(subarr, time, inputArr[i]))
        }
      }

      resArr = [...tmpArr]
    }
  }
  console.log(resArr.length)
  return resArr;
}

// console.log(permutation(arr1));

const multipleFromTopToDown = (num) => {
  let total = 1;
  let track = 1;

  while (track <= num) {
    total *= track;
    track += 1;
  }

  return total;
}

function minOverallAwkwardness(arr) {
  // Write your code here
  const arrs = permutation(arr);
  let tracking = [];

  for (let arr of arrs) {
    let max = Math.abs(arr[0]-arr[arr.length-1]);

    for (let index=0; index < arr.length-1; index++) {
      max = Math.max(max, Math.abs(arr[index] - arr[index+1]))
    }

    tracking.push(max);
  }
  // console.log('tracking', tracking)

  return tracking.sort((a,b) => a-b).shift();
}
console.log(minOverallAwkwardness(arr1))
console.log(minOverallAwkwardness(arr2))