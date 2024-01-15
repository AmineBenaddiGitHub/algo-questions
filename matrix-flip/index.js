/***

Given a 2D array, write a function that flips it vertically or horizontally.

Example:

let array = [
[1,2,3],
[4,5,6],
[7,8,9]
]

> flip(array, 'horizontal')
> [[3,2,1],[6,5,4],[9,8,7]]

> flip(array, 'vertical')
> [[7,8,9],[4,5,6],[1,2,3]]
***/

function flip(matrix, direction) {
  switch (direction) {
    case "horizontal":
      return matrix.map((e) => e.map((_, idx) => e.at(idx - 1)));
    case "vertical":
      return matrix.map((e, idx) =>
        e.map((_, jdx) => matrix.at(-idx - 1)?.[jdx])
      );
    case "diagonal":
      return matrix.map((e, idx) => e.map((_, jdx) => matrix[jdx][idx]));
    default:
      return matrix;
  }
}

console.log(
  flip(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    "horizontal"
  )
);

console.log(
  flip(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    "vertical"
  )
);

console.log(
  flip(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    "diagonal"
  )
);
