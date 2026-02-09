/*
Given an integer array and a number n, move all of the ns to the end of the array
while maintaining the relative order of the non-ns.
Bonus: do this without making a copy of the array!

Example:

$ moveNums([0,2,0,3,10], 0)
$ [2,3,10,0,0]

*/

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function moveNums(arr, num) {
  let ptr = arr.indexOf(num);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
      swap(arr, ptr, i);
      ptr = arr.indexOf(num);
    }
  }
  return arr;
}

console.log(moveNums([0, 2, 0, 3, 10], 0));
console.log(moveNums([0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 10, 11, 14], 0));
