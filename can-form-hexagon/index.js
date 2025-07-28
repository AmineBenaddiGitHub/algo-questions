/*
Given an array of side lengths, write a function to determine they can
form a hexagon with three side-length pairs (as in, three pairs of equal
sides needed). Return true if possible.

Examples:

canFormHexagon([2, 3, 8, 8, 2, 3])
> true

canFormHexagon([1, 2, 3, 4, 5, 6])
> false

canFormHexagon([2, 2, 2, 2, 2, 2, 2])
> false
*/

function canFormHexagon(arr) {
  // Polygon Inequality Theorem:
  // A set of n >= 3 positive real numbers can form a polygon
  // if and only if the sum of the lengths of the smallest n - 1
  // sides is greater than the length of the longest side
  const maxLength = Math.max(...arr);
  const maxLengthId = arr.indexOf(maxLength);
  const otherLengthsSum = arr
    .toSpliced(maxLengthId, 1)
    .reduce((acc, v) => acc + v, 0);
  const twoEqualPairs = Object.values(Object.groupBy(arr, (e) => e)).reduce(
    (acc, v) => acc && v.length === 2,
    true
  );
  // is hexagon && longest side is smaller than the sum && 3 side-length pairs
  return arr.length === 6 && maxLength < otherLengthsSum && twoEqualPairs;
}

console.log(canFormHexagon([2, 3, 8, 8, 2, 3]));
console.log(canFormHexagon([1, 2, 3, 4, 5, 6]));
console.log(canFormHexagon([2, 2, 2, 2, 2, 2, 2]));
