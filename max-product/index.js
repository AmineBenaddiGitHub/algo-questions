/*
Write a function that takes in a list (of length >= 3) of numbers,
and returns the maximum product that can be obtained by multiplying
any three integers from the list.
(functional solution, not memory efficient :P)
*/

function maxProduct(arr) {
  if (arr.length < 3) return -Infinity;
  let res = arr[0] * arr[1] * arr[2];
  arr.forEach((i, idx) => {
    arr.slice(idx + 1).forEach((j, jdx) => {
      arr.slice(idx + jdx + 2).forEach((k) => {
        const prod = i * j * k;
        if (prod > res) res = prod;
      });
    });
  });
  return res;
}

console.log(maxProduct([2, 4]));
console.log(maxProduct([2, 4, 1, 3, -5, 6]));
