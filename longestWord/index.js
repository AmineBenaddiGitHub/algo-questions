/**
 * Given a string str and a set of words dict, find the longest word in dict that is a subsequence of str.
 * let str = "abppplee"
 * let dict = {"able", "ale", "apple", "bale", "kangaroo"}
 $ longestWord(str, dict)
 $ 'apple'
 // "able" and "ale" also work, but are shorter than "apple"
 // "bale" has all the right letters, but not in the right order
 */

let str = "abppplee";
let dict = ["able", "ale", "apple", "bale", "kangaroo"];

const longestWord = (str, dict) => {
  let res = "";
  dict.forEach((d) => {
    let idx1 = 0,
      idx2 = 0;
    while (idx2 < d.length && idx1 < str.length) {
      if (d[idx2] === str[idx1]) {
        idx1++;
        idx2++;
      } else {
        idx1++;
      }
    }
    if (idx2 === d.length && d.length > res.length) res = d;
  });
  return res;
};

console.log(longestWord(str, dict));
