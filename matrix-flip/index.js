function flip(matrix, direction) {
  switch (direction) {
    case "horizontal":
      return matrix.map((e) => e.reverse());
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
