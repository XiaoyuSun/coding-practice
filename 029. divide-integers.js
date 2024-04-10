let divide = function (dividend, divisor) {
  let did = Math.abs(dividend);
  let dis = Math.abs(divisor);
  let sign = (divisor > 0 && dividend > 0) || (divisor < 0 && dividend < 0);
  let res = 0;
  let arr = [dis];

  if (dividend === 0 || did < dis) return 0;
  if (divisor === -1 && dividend === -2147483648) return 2147483647;
  if (dis === 1) return divisor > 0 ? dividend : -dividend;

  while (arr[arr.length - 1] < did)
    arr.push(arr[arr.length - 1] + arr[arr.length - 1]);

  console.log(arr);

  for (let i = arr.length - 1; i >= 0; i--) {
    if (did >= arr[i]) {
      did -= arr[i];
      // console.log('res --- 1', res, 'did', did, 'i', i)
      res += i === 0 ? 1 : 2 << (i - 1);
      console.log("res --- 2", res);
    }
  }

  return sign ? res : -res;
};

console.log(divide(59, 3));
// console.log(2 << 3)
