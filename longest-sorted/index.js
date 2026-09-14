/*
Given a sentence, return the longest word whose letters appear in
alphabetical order.

Examples:

> longestSorted("The autumn leaves almost glow.")
> "almost"

> longestSorted("A cool sheep sleeps.")
> ""
*/

function longestSorted(s) {
  const sortedWords = s
    .replace(/[^ a-zA-Z0-9]/g, "")
    .split(" ")
    .filter((e) => e.split("").toSorted().join("") === e);
  const longestLength = Math.max(...sortedWords.map((e) => e.length));
  return sortedWords.filter((e) => e.length === longestLength).at(0);
}

console.log(longestSorted("The autumn leaves almost glow."));
console.log(longestSorted("A cool sheep sleeps."));
console.log(longestSorted("cool sheep sleeps."));
