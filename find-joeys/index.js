/*
A kangaroo word contains a shorter synonym (its "joey") whose letters appear in order, but not necessarily consecutively. Given a lowercase word and a list of its synonyms (non-empty), return all the joeys in the list's original order. The synonyms are provided, you don’t need to determine whether two words mean the same thing. Unless you really want to.

Examples:

findJoeys("blossom", ["flower", "bloom"]);
// ["bloom"]

findJoeys("chocolate", ["cocoa", "candy"]);
// ["cocoa"]

findJoeys("cat", ["feline"]);
// []

*/

function findJoeys(target, candidats) {
  return candidats.reduce((acc, e) => {
    if (isPartOfString(e, target)) acc.push(e);
    return acc;
  }, []);
}

function isPartOfString(subStr, str) {
  const subStrArr = subStr.split("");
  const strArr = str.split("");
  subStrArr.forEach((e, idx) => {
    const jdx = strArr.indexOf(e);
    if (jdx > -1) {
      subStrArr[idx] = "";
      strArr[jdx] = "";
    }
  });
  return subStrArr.every((e) => e === "");
}

console.log(findJoeys("blossom", ["flower", "bloom"]));
console.log(findJoeys("chocolate", ["cocoa", "candy"]));
console.log(findJoeys("cat", ["feline"]));
