/*
For an array of numbers, generate an array where for every element, all neighboring elements are added to itself, and return the sum of that array.

Examples:

[]               -> 0
[1]              -> 1
[1, 4]           -> 10 // (1+4 + 4+1)
[1, 4, 7]        -> 28
[1, 4, 7, 10]    -> 55
[-1, -2, -3]     -> -14
[0.1, 0.2, 0.3]  -> 1.4
[1,-20,300,-4000,50000,-600000,7000000] -> 12338842
*/

function sumNeighbouring(arr) {
  return arr.reduce(
    (acc, e, i) =>
      acc +
      e +
      (i > 0 ? arr[i - 1] : 0) +
      (i < arr.length - 1 ? arr[i + 1] : 0),
    0
  );
}

console.log(sumNeighbouring([]));
console.log(sumNeighbouring([1]));
console.log(sumNeighbouring([1, 4]));
console.log(sumNeighbouring([1, 4, 7]));
console.log(sumNeighbouring([1, 4, 7, 10]));
console.log(sumNeighbouring([-1, -2, -3]));
console.log(sumNeighbouring([0.1, 0.2, 0.3]));
console.log(sumNeighbouring([1, -20, 300, -4000, 50000, -600000, 7000000]));
