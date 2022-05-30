/**
Write a function that determines if all the characters in a given string are unique.
Can you do this without making any new variables? You choose if you want to include capitalization
in your consideration for this one, as a fun challenge.

Example:

> allUnique('Cassidy')
> false

> allUnique('cat & dog')
> false

> allUnique('cat+dog')
> true
 */

const allUnique = (str) =>
  str
    .split("")
    .sort((a, b) => a.toLowerCase() - b.toLowerCase())
    .filter((e, idx, arr) => e.toLowerCase() === arr[idx + 1]?.toLowerCase())
    .length === 0;

console.log(allUnique("CaSsidy"));
console.log(allUnique("Cassidy"));
console.log(allUnique("cat & dog"));
console.log(allUnique("cat+dog"));
