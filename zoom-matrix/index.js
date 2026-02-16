/*
You have a 2D grid of numbers. Write a function that zooms in by an integer factor k >= 2
by turning each cell into a k x k block with the same value, returning the bigger grid.

Examples:

zoom([[1,2],[3,4]], 2)
[
  [1,1,2,2],
  [1,1,2,2],
  [3,3,4,4],
  [3,3,4,4]
]

zoom([[7,8,9]], 3)
[
  [7,7,7,8,8,8,9,9,9],
  [7,7,7,8,8,8,9,9,9],
  [7,7,7,8,8,8,9,9,9]
]

zoom([[1],[2]], 3)
[
  [1,1,1],
  [1,1,1],
  [1,1,1],
  [2,2,2],
  [2,2,2],
  [2,2,2]
]
*/

function zoom(arr, k) {
  return Array.from({ length: arr.length * k }, (_, idx) =>
    Array.from(
      { length: arr[Math.floor(idx / k)].length * k },
      (_, jdx) => arr[Math.floor(idx / k)][Math.floor(jdx / k)],
    ),
  );
}

console.log(
  zoom(
    [
      [1, 2],
      [3, 4],
    ],
    2,
  ),
);
console.log(zoom([[7, 8, 9]], 3));
console.log(zoom([[1], [2]], 3));
