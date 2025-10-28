/*
Given a field represented as an array of 0s and 1s, where 1 means that position needs protection,
you can place a scarecrow at any index, and each scarecrow protects up to k consecutive positions
centered around itself (for example, for k = 3, a scarecrow at i protects i-1, i, and i+1).
Return the minimum set of indices where scarecrows should be placed so that all the positions
with 1 are protected. You can assume k is an odd number (or make up what happens if it's even).

Examples:

let field = [1, 1, 0, 1, 1, 0, 1];
let k = 3;

placeScarecrows(field, k);
> [1, 4, 6]

placeScarecrows([1, 0, 1, 1, 0, 1], k)
> [1, 4]

placeScarecrows([1, 1, 1, 1, 1], 1)
> [0, 1, 2, 3, 4]
*/

function placeScarecrows(arr, k) {
  let ctr = k,
    res = [];
  arr.forEach((e, i) => {
    if (ctr === 0) ctr = k;

    if (e === 1 || ctr < k) ctr--;

    if (ctr === Math.trunc(k / 2)) res.push(i);
  });
  // Initiated counter and not placed yet ...
  if (ctr > Math.trunc(k / 2) && ctr !== k) res.push(arr.length - 1);
  return res;
}

console.log(placeScarecrows([1, 1, 0, 1, 1, 0, 1], 3));
console.log(placeScarecrows([1, 0, 1, 1, 0, 1], 3));
console.log(placeScarecrows([1, 1, 1, 1, 1], 1));
console.log(placeScarecrows([1, 1, 1, 0, 0], 3));
console.log(placeScarecrows([1, 1, 1, 0, 0], 4));
console.log(placeScarecrows([1, 1, 1, 1, 0], 2));
console.log(placeScarecrows([1, 1, 1, 1, 0], 4));
console.log(placeScarecrows([1, 1, 1, 1, 1], 4));
