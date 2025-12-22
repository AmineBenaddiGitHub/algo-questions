/*
An alternating array is a list of any length in which two (not necessarily different)
values are alternating (all even-indexed items are equal, and all odd-indexed items are equal).
Given an array, return true if it is alternating.

Examples:

[]             -> True
[1]            -> True
[1,1]          -> True
[1,2,1]        -> True
[10,5,10,5,10] -> True
[2,2,3,3]      -> False
[5,4,3,5,4,3]  -> False
*/

function alternatingArray(arr) {
  if (arr.length === 0) return { eveness: 0, consistency: true };
  return arr.reduce(
    (acc, e, idx) => {
      acc.consistency = acc.consistency && (e + idx) % 2 === acc.eveness;
      return acc;
    },
    {
      eveness: arr[0] % 2,
      consistency: true,
    }
  ).consistency;
}

console.log(alternatingArray([]));
console.log(alternatingArray([1]));
console.log(alternatingArray([2]));
console.log(alternatingArray([1, 2]));
console.log(alternatingArray([2, 1]));
console.log(alternatingArray([1, 2, 1]));
console.log(alternatingArray([10, 5, 10, 5, 10]));
console.log(alternatingArray(Array.from({ length: 100 }, (_, idx) => idx)));
console.log(alternatingArray(Array.from({ length: 100 }, (_, idx) => idx + 1)));
console.log(
  alternatingArray(
    Array.from({ length: 100 }, () => Math.floor(Math.round() * 100))
  )
);
console.log(alternatingArray([2, 2, 3, 3]));
console.log(alternatingArray([5, 4, 3, 5, 4, 3]));
