/*
Given a positive integer n, calculate the mean number of bits required to represent all
integers from 0 to n-1 (where the bit count of 0 is 1).
Return the result rounded to two decimal places.

Example:

> meanBits(6)
> 2.00

// Explanation
// 0: 1 bit, 1: 1 bit, 2: 2 bits, 3: 2 bits, 4: 3 bits, 5: 3 bits
// Mean = (1 + 1 + 2 + 2 + 3 + 3) / 6 = 2.00
*/

function meanBits(n) {
  return (
    Array.from({ length: n }, (_, idx) => idx.toString(2).length).reduce(
      (acc, v) => acc + v,
      0,
    ) / n
  );
}

console.log(meanBits(6));
