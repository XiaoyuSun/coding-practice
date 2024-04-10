const solution = (s) => {
  let res = "";
  let word = "";

  for (let i = 0; i < s.length; i++) {
    if (word.length > 0 && s[i] === " ") {
      if (res.length > 0) {
        res = word + " " + res;
      } else {
        res = word;
      }
      word = "";
    }

    if (s[i] !== " ") {
      word += s[i];
    }
  }

  if (word.length > 0) {
    if (res) {
      res = word + " " + res;
    } else {
      res = word;
    }
  }

  return res;
};

let s = "EPY2giL";
console.log(solution(s).length === s.length);
console.log(solution(s));
