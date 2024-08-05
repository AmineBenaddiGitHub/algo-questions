/*
Create a function that should take one argument n, which is a positive integer.
The function should return the sum of all squared positive integers between 1 and n, inclusive.
*/

function squares(n) {
  return Array.from({ length: n + 1 }, (_, idx) => idx * idx).reduce(
    (acc, val) => acc + val,
    0
  );
}

console.log(squares(5));
console.log(squares(10));
console.log(squares(25));
console.log(squares(100));
