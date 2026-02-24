/*
Given an array of integers, find the contiguous subarray that has the largest sum and
return that sum. A subarray must contain at least one element.
If all elements are negative, return the largest (least negative) value.
If you need a hint, look up Kadane's Algorithm!

Examples:

> maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])
6
> maxSubarraySum([5])
5
> maxSubarraySum([-1, -2, -3, -4])
-1
> maxSubarraySum([5, 4, -1, 7, 8])
23
*/

// function arraySum(arr) {
//   return arr.reduce((acc, e) => acc + e, 0);
// }
// function maxSubarraySum(arr) {
//   let sum = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length + 1; j++) {
//       const tmpSum = arraySum(arr.slice(i, j));
//       sum = Math.max(sum, tmpSum);
//     }
//   }
//   return sum;
// }

// Better solution (Kadane's algorithm)
function maxSubarraySum(arr) {
  let best = arr[0];
  let curr = arr[0];

  for (let i = 1; i < arr.length; i++) {
    curr = Math.max(arr[i], curr + arr[i]);
    best = Math.max(best, curr);
  }

  return best;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubarraySum([5]));
console.log(maxSubarraySum([-1, -2, -3, -4]));
console.log(maxSubarraySum([5, 4, -1, 7, 8]));
