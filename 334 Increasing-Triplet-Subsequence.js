
const solution = (nums) => {
  if (nums.length < 3) return false;
  
  let res = null;
  
  const recur = (nums, count, memo = {}) => {
    if (count === 1 && nums.length >= 1) return true;
    
    for (let i = 0; i< nums.length-1; i++) {
      let biggerArray = [];
      if (memo[nums[i]] === false) {
        continue;
      }      
      for (let j= i+1; j < nums.length; j++) {
        if (nums[j] > nums[i]) {
          biggerArray.push(nums[j]);
        }
      }

      res = recur(biggerArray, count - 1);
      
      if (res) {
        memo[nums[i]] = true;
        return res;
      }
      memo[nums[i]] = false;
    }
    
    return false;
  }
  
  recur(nums, 3, {});;
  return res;
}

let nums1 = [1,5,0,4,1,3];
let nums2 = [1,2,3,1,2,1];
let nums3 = [1,2,3,4,5];
let nums4 = [2,4,-2,-3];
let nums5 = [20,100,10,12,5,13];
let nums6 = [1,2,2,1];
let nums7 = [1];

console.log('result: ', nums1 ,solution(nums1));
console.log('result: ', nums2, solution(nums2));
console.log('result: ', nums3, solution(nums3));
console.log('result: ', nums4, solution(nums4));
console.log('result: ', nums5, solution(nums5));
console.log('result: ', nums6, solution(nums6));
console.log('result: ', nums7, solution(nums7));

// for (let i=0; i<10; i++) {
//   console.log(i)
//   if (i < 2) {
//     console.log('hahaha')
//   } else {
//     return;
//   }
// }
