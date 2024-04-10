let test1 = [-1, -1, -1, 2, -3];

const solution = (nums) => {
  let res = Math.max(...nums);

  let currMax = 1;
  let currMin = 1;

  for (let num of nums) {
    if (num === 0) {
      currMax = 1;
      currMin = 1;
    }

    let tmpMax = currMax;
    currMax = Math.max(num, tmpMax * num, currMin * num);
    currMin = Math.min(num, tmpMax * num, currMin * num);

    res = Math.max(currMax, res);
  }

  return res;
};

console.log(solution(test1));
