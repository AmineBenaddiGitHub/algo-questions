/**
Given an array of numbers, add all of the values together but only if the number doesn't repeat a digit.
*/

function uniqueDigits(num) {
  const strArr = num.toString().split(""),
    set = new Set(...strArr);
  return strArr.length === set.size;
}

function uniqueSum(arr) {
  return arr.reduce((s, v) => s + (uniqueDigits(v) ? v : 0), 0);
}
console.log(uniqueSum([1, 2, 3]));
console.log(uniqueSum([11, 22, 33]));
console.log(uniqueSum([101, 2, 3]));
