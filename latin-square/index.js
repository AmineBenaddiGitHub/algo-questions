/*
Write a function to generate a Latin Square given a positive integer n.
The values can be any n distinct values, and don't have to be
consistent for different n.

Examples:

latinSquare(1)
[[1]]

latinSquare(2)
[[1, 2], [2, 1]]

latinSquare(4)
[[1, 2, 3, 4], [2, 1, 4, 3], [3, 4, 1, 2], [4, 3, 2, 1]]

*/

// Shifting arrays are the easiest way to create Latin squares
function latinSquare(n) {
  return Array.from({ length: n }, (_, idx) => idx + 1).map((idx) =>
    Array.from({ length: n }, (_, jdx) => 1 + ((idx + jdx) % n))
  );
}

console.log(latinSquare(1));
console.log(latinSquare(2));
console.log(latinSquare(4));
