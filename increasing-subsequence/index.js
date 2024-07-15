/*
Given an integer array nums, return the length of the longest increasing subsequence.
*/

function increasingSubsequence(arr) {
  let seq = [arr[0]],
    len = 0;
  arr.forEach((e, idx) => {
    if (idx > 0) {
      if (e > arr[idx - 1]) seq.push(e);
      else {
        if (len < seq.length) len = seq.length;
        seq = [arr[idx]];
      }
    }
  });
  return len;
}

console.log(increasingSubsequence([10, 9, 2, 3, 7, 101, 18]));
console.log(increasingSubsequence([4, 4, 4, 4, 3]));
