const parensSubstring = (s) => {
  let res = 0;
  while (s.indexOf("()") >= 0) {
    res += 2;
    s = s.replace("()", "");
  }
  return res;
};

console.log(parensSubstring(")("));
console.log(parensSubstring("(()("));
console.log(parensSubstring(")()(()))"));
console.log(parensSubstring("()()()()"));
