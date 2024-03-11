/**
 Given an integer array arr, return the maximum difference between two successive elements in arr's sorted form.
 Return 0 if there's 0 or 1 elements.
 */

function maxGap(arr) {
  if (arr.length < 2) return 0;
  arr.sort((a, b) => a - b);
  let gap = 0;
  arr.forEach((e, idx) => {
    if (idx < arr.length - 1) {
      const diff = arr[idx + 1] - e;
      if (diff > gap) gap = diff;
    }
  });
  return gap;
}

console.log(maxGap([1]));
console.log(maxGap([]));
console.log(maxGap([3, 6, 9, 1, 2]));
console.log(maxGap([3, 8, 10, 1, 2]));
