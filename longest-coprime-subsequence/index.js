/*
Given an array of positive integers, find the length of the longest subsequence where every adjacent pair of
elements in the subsequence is coprime (where the greatest common divisor, or GCD, is 1).

Example:

longestCoprimeSubsequence([6, 12, 4, 8])
> 1 // none are coprime

longestCoprimeSubsequence([4, 3, 6, 9, 7, 2])
> 4 // [4, 3, 7, 2], where gcd(4,3)=1, gcd(3,7)=1, gcd(7,2)=1
*/

function longestCoprimeSubsequence(arr, path = [], result = []) {
  if (isCoprimeArray(path)) {
    result.push(path);
  }
  if (arr.length === 0) {
    return;
  }
  const [elt, ...rest] = arr;
  longestCoprimeSubsequence(rest, [...path, elt], result);
  longestCoprimeSubsequence(rest, [...path], result);

  return Math.max(...result.map((e) => e.length));
}

function isCoprimeArray(arr) {
  if (arr.length === 1) return true;
  return arr.reduce(
    (acc, v, idx) =>
      acc && (idx < arr.length - 1 ? gdc(v, arr[idx + 1]) === 1 : true),
    true,
  );
}

function gdc(a, b) {
  if (a === 0 || b === 0) return a + b;
  if (a === b) return a;
  if (a > b) return gdc(a - b * Math.floor(a / b), b);
  if (a < b) return gdc(a, b - a * Math.floor(b / a));
}

console.log(longestCoprimeSubsequence([6, 12, 4, 8]));
console.log(longestCoprimeSubsequence([4, 3, 6, 9, 7, 2]));
