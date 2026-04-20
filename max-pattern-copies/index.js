/*
Given a string s containing letters and ? wildcards (that can match any letter),
and a target pattern string pattern, rearrange the entire string however you like.
Return the maximum number of non-overlapping copies of pattern that can appear
in the rearranged result.

Example:

maxPatternCopies("abcabc???", "ac")  // 3

maxPatternCopies("aab??", "aab")  // 1

maxPatternCopies("??????", "abc")  // 2
*/

function maxPatternCopies(str, pattern) {
  const entries = str.split("");
  const letters = pattern.split("");
  whileLoop: while (entries.length > 0) {
    for (let i = 0; i < letters.length; i++) {
      const l = letters[i];
      const idx = entries.indexOf(l);
      if (idx > -1) entries.splice(idx, 1);
      if (idx === -1) {
        const qIdx = entries.indexOf("?");
        if (qIdx > -1) entries.splice(qIdx, 1);
        else {
          break whileLoop;
        }
      }
    }
  }
  return Math.floor((str.length - entries.length) / pattern.length);
}

console.log(maxPatternCopies("abcabc???", "ac") === 3);
console.log(maxPatternCopies("aab??", "aab") === 1);
console.log(maxPatternCopies("??????", "abc") === 2);
console.log(maxPatternCopies("????????", "abc") === 2);
console.log(maxPatternCopies("?????????", "abc") === 3);
console.log(maxPatternCopies("???????a", "abc") === 2);
console.log(maxPatternCopies("???????k", "abc") === 2);
