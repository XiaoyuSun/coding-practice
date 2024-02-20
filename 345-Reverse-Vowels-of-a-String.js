let str = 'hello';

const revertString = (str) => {
  if (str.length === 0) {
    return ''
  }
  
  return revertString(str.substring(1)) + str[0]
}

const reverseVowels = (s) => {
  if (s.length <= 1) return s;
  
  let i = 0;
  let j = s.length - 1;
  let arr = s.split('');

  let target = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
  while(i < j) {
    if (!target.includes(arr[i])) {
      i += 1;
    }

    if (!target.includes(arr[j])) {
      j -= 1;
    }

    if (target.includes(arr[i]) && target.includes(arr[j])) {
      console.log(i, j, arr[i], arr[j])
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp; 

      i += 1;
      j -=1;
    }
  }

  return arr.join('')
} 

// console.log(revertString(str))
console.log('a' === 'A')
// console.log(reverseVowels('hello'))
console.log(reverseVowels('aA'))