/*
Given an integer n, return all unique combinations of Perrin numbers
(up to and including the nth Perrin number) that sum to a target value k,
where each Perrin number can be used at most once.
Return the combinations sorted in ascending order.

Example:

> perrinCombinations(7, 12)
[[0,2,3,7],[0,5,7],[2,3,7],[5,7]]

> perrinCombinations(6, 5)
[[0,2,3],[0,5],[2,3],[5]]
*/

function perrin(n) {
  if (n === 0) return 3;
  if (n === 1) return 0;
  if (n === 2) return 2;
  return perrin(n - 2) + perrin(n - 3);
}

function coinComboOnce(coins, target, path = [], result = []) {
  const sum = path.reduce((acc, v) => acc + v, 0);
  if (sum === target && !result.includes(path.toString()))
    result.push(path.toString());
  if (coins.length > 0 && sum <= target) {
    const c = coins[0];
    coinComboOnce(coins.slice(1), target, [...path, c], result);
    coinComboOnce(coins.slice(1), target, [...path], result);
  }
  return result.map((e) => e.split(",").map((e) => parseInt(e)));
}

function perrinCombinations(nbr, target) {
  return coinComboOnce(
    Array.from(
      new Set(Array.from({ length: nbr + 1 }, (_, idx) => perrin(idx))),
    ).toSorted(),
    target,
  );
}

console.log(perrinCombinations(7, 12));
console.log(perrinCombinations(6, 5));
console.log(perrinCombinations(10, 30));
