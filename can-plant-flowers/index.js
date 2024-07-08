/*
Write a function that takes an array of integers representing the number of flowers planted in a line,
and an integer k representing the number of additional flowers you want to plant.
Return whether it's possible to plant all k flowers without planting any two flowers adjacent to each other.
*/

function canPlantFlowers(arr, k) {
  let possibilities = k;
  arr.forEach((e, idx) => {
    if (idx === 0 && e === 0 && idx + 1 < arr.length && arr[idx + 1] === 0) {
      possibilities--;
      arr[idx] = 1;
    }
    if (
      idx > 0 &&
      arr[idx - 1] === 0 &&
      e === 0 &&
      idx + 1 < arr.length &&
      arr[idx + 1] === 0
    ) {
      possibilities--;
      arr[idx] = 1;
    }

    if (idx > 0 && arr[idx - 1] === 0 && e === 0 && idx + 1 === arr.length) {
      possibilities--;
      arr[idx] = 1;
    }
  });
  return possibilities <= 0;
}

console.log(canPlantFlowers([1, 0, 0, 0, 1], 1) === true);
console.log(canPlantFlowers([1, 0, 0, 0, 1], 2) === false);
console.log(canPlantFlowers([0, 0, 0, 0, 0], 3) === true);
console.log(canPlantFlowers([1, 0, 1, 0, 1], 1) === false);
console.log(canPlantFlowers([0, 0, 0], 1) === true);
console.log(canPlantFlowers([0, 0, 0], 2) === true);
console.log(canPlantFlowers([0, 0, 0], 3) === false);
console.log(canPlantFlowers([0], 1) === true);
console.log(canPlantFlowers([0], 2) === false);
