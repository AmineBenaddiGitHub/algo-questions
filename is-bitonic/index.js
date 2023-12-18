function isBitonic(arr) {
  let max = Math.max(...arr),
    idx = arr.indexOf(max),
    bitonic = idx < arr.length - 1;
  for (let i = 0; i < idx && bitonic; i++) {
    if (arr[i] > arr[i + 1]) bitonic = false;
  }
  for (let i = idx; i < arr.length && bitonic; i++) {
    if (arr[i] < arr[i + 1]) bitonic = false;
  }
  return { bitonic, max };
}

console.log(isBitonic([1, 2, 3, 2]));
console.log(isBitonic([1, 2, 3]));
console.log(isBitonic([3, 4, 5, 5, 5, 2, 1]));
