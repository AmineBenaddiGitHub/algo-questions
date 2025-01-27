/*
Given two strings, s and p, return an array of all the start indices of p's anagrams in s.
*/

function findAnagrams(str, anagram) {
  return str.split("").reduce((acc, _, idx) => {
    if (
      str.substr(idx, anagram.length).split("").sort().join("") ===
      anagram.split("").sort().join("")
    ) {
      acc.push(idx);
    }
    return acc;
  }, []);
}

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("fish", "cake"));
console.log(findAnagrams("abab", "ab"));
