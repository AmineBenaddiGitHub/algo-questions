/*
Given a string str, write a function to determine the longest substring containing only two unique characters.
*/

function uniqueSubstr(str, len = 2) {
  const res = {
    start: 0,
    end: 0,
    str: "",
    arr: [],
  };
  while (res.start < str.length - len) {
    let substr = str.substring(res.start, res.end);
    let subset = new Set(substr.split(""));
    while (subset.size <= len && res.end < str.length + 1) {
      if (substr.length > res.str.length) {
        res.str = substr;
      }
      if (substr.length === res.str.length) {
        res.arr.push(substr);
      }
      res.end++;
      substr = str.substring(res.start, res.end);
      subset = new Set(substr.split(""));
    }
    res.start++;
    res.end = 0;
  }
  // all longest substrings with a length === len (2)
  res.arr = res.arr.filter((e) => e.length === res.str.length);
  return res.arr;
}

console.log(uniqueSubstr("eceba"));
console.log(uniqueSubstr("ccaabbb"));
console.log(uniqueSubstr("abcabcabc"));
