/*
Write a function that takes an array of integers and a target sum,
and returns all unique quadruplets [a, b, c, d] in the array
such that a + b + c + d = target
*/

// General case
function nthSum(arr, target, len, path = [], res = []) {
  if (path.length < len && arr.length > 0) {
    nthSum(arr.slice(1), target, len, [...path, arr[0]], res);
    nthSum(arr.slice(1), target, len, [...path], res);
  }
  if (path.length === len) {
    if (path.reduce((acc, val) => acc + val, 0) === target) {
      res.push(path);
    }
  }
  return res;
}

// fourSum
const fourSum = (arr, target) => nthSum(arr, target, 4);

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([], 0));
console.log(fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11));
