/*
Given an array of strings A, and an array of indexes B,
reorder the strings in array A with the given indices in array B.
You can choose to do this in-place, or return a new array.
As you decide which route to take, think... which is more efficient?

Example:

let a = ['C', 'D', 'E', 'F', 'G', 'H'];
let b = [3, 0, 4, 1, 2, 5];

> reorder(a, b) // a is now ['D', 'F', 'G', 'C', 'E', 'H']
*/

function reorder(a, b) {
  const resp = Array.from({ length: a.length }, (_, idx) => undefined);
  b.forEach((e, idx) => {
    resp[e] = a[idx];
  });
  return resp;
}

console.log(reorder(["C", "D", "E", "F", "G", "H"], [3, 0, 4, 1, 2, 5]));
