/*
Given an array of strings, group the anagrams together.
*/
function groupAnagrams(arr) {
  return Object.values(Object.groupBy(arr, (e) => e.split("").sort().join("")));
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["vote", "please"]));
console.log(groupAnagrams(["debitcard", "badcredit"]));
