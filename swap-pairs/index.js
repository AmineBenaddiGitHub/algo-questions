const swapPairs = (array) =>
  array.length % 2 === 0
    ? array.map((_, idx, array) =>
        idx % 2 === 0 ? array[idx + 1] : array[idx - 1]
      )
    : array.map((e, idx, array) =>
        idx % 2 === 0
          ? idx + 1 === array.length
            ? e
            : array[idx + 1]
          : array[idx - 1]
      );

console.log(swapPairs([1, 2, 3, 4, 5, 6]));
console.log(swapPairs([1, 2, 3, 4, 5]));
console.log(swapPairs([1, 2, 3, 4]));
console.log(swapPairs([1, 2, 3]));
console.log(swapPairs([1, 2]));
console.log(swapPairs([1]));
console.log(swapPairs([]));
