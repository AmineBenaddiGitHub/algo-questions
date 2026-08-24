/*
Given an array of integers, return a new array where odd numbers come first,
even numbers come next, and zeros appear at the end.
The relative order of elements within each group must be preserved.

Example:

partitionArray([0, 3, 2, 1, 4, 0, 7])
[3, 1, 7, 2, 4, 0, 0]
*/

function partitionArray(arr) {
  return [
    ...arr.filter((e) => e % 2 === 1),
    ...arr.filter((e) => e !== 0 && e % 2 === 0),
    ...arr.filter((e) => e === 0),
  ];
}

console.log(partitionArray([0, 3, 2, 1, 4, 0, 7]));
