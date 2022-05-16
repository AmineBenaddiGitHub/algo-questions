/**
This week’s question:
Given two integer arrays of size n, return a new array of size n such that n consists of only unique
elements and the sum of all its elements is maximum.

Example:

let arr1 = [7, 4, 10, 0, 1]
let arr2 = [9, 7, 2, 3, 6]

$ maximizedArray(arr1, arr2)
$ [9, 7, 6, 4, 10]
*/

const arr1 = [7, 4, 10, 0, 1];
const arr2 = [9, 7, 2, 3, 6];

const maximizedArray = (arr1, arr2) => {
  const totArray = [...arr1, ...arr2].sort((a, b) => b - a);
  let lenArray = arr1.length - 1,
    idx = 1,
    resArray = [totArray[0]];
  while (lenArray) {
    if (totArray[idx] !== totArray[idx - 1]) {
      resArray.push(totArray[idx]);
      lenArray--;
    }
    idx++;
  }
  return resArray;
};

console.log(maximizedArray(arr1, arr2));
