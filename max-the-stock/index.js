/**
Given an array of integers representing the stock prices of a company in chronological order,
write a function that determines the maximum profit you can achieve by buying and selling the stock once.
If no profit can be made, return 0.
*/

function maxTheStock(arr) {
  const minIdx = arr.indexOf(Math.min(...arr));
  const minMaxIdx = arr.lastIndexOf(Math.max(...arr.slice(minIdx)));

  const maxIdx = arr.lastIndexOf(Math.max(...arr));
  const maxMinIdx = arr.indexOf(Math.min(...arr.slice(0, maxIdx + 1)));

  return Math.max(arr[minMaxIdx] - arr[minIdx], arr[maxIdx] - arr[maxMinIdx]);
}

console.log(maxTheStock([7, 1, 5, 3, 6, 4]));
console.log(maxTheStock([7, 6, 4, 3, 1]));
