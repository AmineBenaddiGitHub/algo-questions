/*
Given an input positive integer n (from 1 to your language's limit, inclusively),
return the maximum number of distinct positive integers that sum to n.

Examples:

> maxDistinctCount(5)
> 2
// 2 + 3 = 5, or 1 + 4 = 5

maxDistinctCount(8)
> 3
// 1 + 2 + 5 = 8

maxDistinctCount(15)
> 5
// 1 + 2 + 3 + 4 + 5 = 15
*/

function maxDistinctCount(n) {
  const numbers = Array.from({ length: n }, (_, idx) => idx + 1);
  return allCombinations(numbers, n);
}

function allCombinations(numbers, target, path = [], result = { count: 0 }) {
  const sum = path.reduce((acc, v) => acc + v, 0);
  if (sum === target && result.count < path.length) result.count = path.length;
  if (sum >= target || numbers.length === 0) return;
  if (sum < target) {
    const [element, ...rest] = numbers;
    allCombinations(rest, target, [...path, element], result);
    allCombinations(rest, target, [...path], result);
  }
  return result.count;
}

console.log(maxDistinctCount(5));
console.log(maxDistinctCount(8));
console.log(maxDistinctCount(15));
