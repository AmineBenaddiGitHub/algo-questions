/*
Each person at a Halloween party has exactly one costume, but they’ve been shuffled:
costumes[i] is the index of the person who owns the costume person i is wearing.
Return the minimum number of swaps between any two people needed to give everyone
their own costume.

Examples:

> halloweenSwap([0, 1, 2, 3])
> 0

> halloweenSwap([1, 2, 0])
> 2

> halloweenSwap([4, 3, 2, 1, 0])
> 2

> halloweenSwap([2, 3, 4, 0, 1])
> 4
*/

function halloweenSwap(arr) {
  let counter = 0,
    isAsc = isAscending(arr);
  while (!isAsc) {
    arr.forEach((e, idx) => {
      if (idx !== e) {
        swap(arr, idx, e);
        counter++;
      }
    });
    isAsc = isAscending(arr);
  }

  return counter;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function isAscending(arr) {
  if (arr.length <= 1) return true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

console.log(halloweenSwap([0, 1, 2, 3]));
console.log(halloweenSwap([1, 2, 0]));
console.log(halloweenSwap([4, 3, 2, 1, 0]));
console.log(halloweenSwap([2, 3, 4, 0, 1]));
