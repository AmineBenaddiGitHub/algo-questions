/*
Given a positive integer n, write a function that returns an array containing all integers from 1 to n,
where each integer i appears exactly i times in the result.
For example, 3 should appear 3 times, 5 should appear 5 times, and so on.
The order of the integers in the output array does not matter.

Example:

> repeatedIntegers(4)
> [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
*/

function repeatedIntegers(n) {
  return Array.from({ length: n }, (_, idx) => idx + 1)
    .map((e) => Array.from({ length: e }, () => e))
    .flat();
}

console.log(repeatedIntegers(5));
console.log(repeatedIntegers(0));
console.log(repeatedIntegers(-1));
