/*
Write a function that takes an array of daily temperatures and returns an array where each element
is the number of days you would have to wait until a warmer temperature.
*/

const dailyTemperatures = (input) =>
  input.map((e, idx, arr) =>
    Math.max(
      arr.slice(idx).findIndex((v) => v > e),
      0
    )
  );

console.log(dailyTemperatures([70, 70, 70, 75]));
console.log(dailyTemperatures([90, 80, 70, 60]));
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
