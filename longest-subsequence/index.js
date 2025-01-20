/*
Given a list of integers, write a function that finds the longest subsequence
where the difference between consecutive elements is either 1 or -1.
Return the length of this subsequence.
*/

function longestSubsequence(arr) {
  let start = 0,
    end = 0,
    max = 0;
  arr.forEach((element, idx) => {
    if (arr.at(idx + 1) && Math.abs(element - arr.at(idx + 1)) === 1) {
      end += 1;
    } else {
      max = Math.max(max, end - start + 1);
      start = idx;
      end = idx;
    }
  });
  return max;
}

console.log(longestSubsequence([1, 2, 3, 4, 5]));
console.log(longestSubsequence([4, 2, 3, 1, 5]));
console.log(longestSubsequence([10, 11, 7, 8, 9, 12]));
