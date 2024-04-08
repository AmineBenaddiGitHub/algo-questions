/*
Imagine you have n dice, and each die has m faces on it (so the numbers are from 1 to m).
Write a function where, given an integer target, it returns the number of possible ways to
roll the dice to get the sum of target face up.
*/
function diceSum(n, m, res, solutions = { count: 0 }) {
  Array.from({ length: m }, (_, idx) => idx + 1).forEach((e) => {
    if (res - e === 0 && n > 0) {
      solutions.count += 1;
    }
    if (res - e > 0 && n > 0) {
      diceSum(n - 1, m, res - e, solutions);
    }
  });
  return solutions.count;
}

console.log(diceSum(1, 6, 3));
console.log(diceSum(2, 6, 7));
