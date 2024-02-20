// 443 String Compression.
const compress = function(chars) {
  if (chars.length === 1) return 1;
  let map = new Map();
  let i = 0;
  
  while(i < chars.length - 1) {
    let key = chars[i] + i;
    
    map.set(key, 1);
    
    let j = i+1;
    let foundBreak = false;
    
    while(j < chars.length) {
      if (chars[i] !== chars[j]) {
        foundBreak = true;
        i = j;
        break;
      } else {
        map.set(key, map.get(key) + 1)
      } 
      
      j += 1;
    }
    
    if (!foundBreak) {
      i = j;
    }
  }
  
  if (i < chars.length) {
    map.set(chars[i]+i, 1)
  }
  
  console.log(map);
  
  i = 0;
  
  map.forEach((value, key) => {
    chars[i] = key[0];
    i += 1;
    let str = value+'';
    
    if (value > 1) {
      for (let index = 0; index <str.length; index++) {
        // console.log(str[index])
        chars[i] = str[index];
        i+=1;
      }
    }
  })
  
  console.log(chars)
  return i;
};

let chars1 = ["a","b","b",'a',"c","c","c",'b','b','b','d',"b","b","b","b","b","b","b","b","b","b","b","b"];
let chars2 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
let chars3 = ["a","a","a","b","b","c","c","c"]
let chars4 = ['a','b','c']
let chars5 = ["a","a","a","a","a","a","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","c","c","c","c","c","c","c","c","c","c","c","c","c","c"];
let chars6 = ["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"];
let chars7 = ['a']

compress(chars1)
compress(chars4)
compress(chars7)
