/*
Write a function that takes in a list (of length >= 3) of numbers,
and returns the maximum product that can be obtained by multiplying
any three integers from the list.
*/

function maxProduct(arr) {
  if (arr.length < 3) return -Infinity;
  let res = arr[0] * arr[1] * arr[2];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const prod = arr[i] * arr[j] * arr[k];
        if (prod > res) res = prod;
      }
    }
  }
  return res;
}

console.log(maxProduct([2, 4]));
console.log(maxProduct([2, 4, 1, 3, -5, 6]));
