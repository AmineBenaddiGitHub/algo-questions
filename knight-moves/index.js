/*
Given the current position of a knight as [row, col] in an 8x8 chess board represented as a 2D array,
write a function to return all valid moves the knight can make.
Extra credit: Do this for every chess piece!

Example:

knightMoves([4, 4])
> [[2, 3], [2, 5], [3, 2], [3, 6], [5, 2], [5, 6], [6, 3], [6, 5]]

knightMoves([0, 0])
> [[1, 2], [2, 1]]

knightMoves([1, 2])
> [[0, 0], [0, 4], [2, 0], [2, 4], [3, 1], [3, 3]]
*/

function knightMoves(pos) {
  const res = [];
  const uniqueMoves = [
    [1, 2],
    [2, 1],
    [-1, -2],
    [-2, -1],
    [-1, 2],
    [-2, 1],
    [1, -2],
    [2, -1],
  ];
  uniqueMoves.forEach((e) => {
    if (
      pos[0] + e[0] >= 0 &&
      pos[0] + e[0] <= 7 &&
      pos[1] + e[1] >= 0 &&
      pos[1] + e[1] <= 7
    ) {
      res.push([pos[0] + e[0], pos[1] + e[1]]);
    }
  });
  return res;
}

console.log(knightMoves([4, 4]));
console.log(knightMoves([0, 0]));
console.log(knightMoves([1, 2]));
