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
    .map((e) => e.toLowerCase())
    .sort()
    .filter((e, idx, arr) => e === arr[idx + 1]).length === 0;

console.assert(!allUnique("CaSsidy"));
console.assert(!allUnique("Cassidy"));
console.assert(!allUnique("cat & dog"));
console.assert(allUnique("cat+dog"));
