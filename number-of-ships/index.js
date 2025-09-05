/*
Imagine a simplified version of the game Battleship played on a 2D grid.
The grid represents the sea, and each cell can either be empty (.) or contain a part of a ship (X).
Ships are placed horizontally or vertically, and there are no adjacent ships.
Given a grid, count the number of battleships in it.
Extra credit: can you make a layout generator for the game given these rules?

Example:

const ships = [
  ['X', 'X', '.', 'X'],
  ['.', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
  ['.', '.', '.', '.'],
];

numberOfShips(ships)
> 2

*/

function numberOfShips(ships, result = { count: 0 }) {
  ships.forEach((row, i) => {
    row.forEach((e, j) => {
      if (e === "X") {
        if (
          typeof ships[i]?.[j + 1] === "number" ||
          typeof ships[i]?.[j - 1] === "number" ||
          typeof ships[i + 1]?.[j] === "number" ||
          typeof ships[i - 1]?.[j] === "number"
        ) {
          const currentNumber = Math.max(
            parseInt(ships[i]?.[j + 1]) ? parseInt(ships[i]?.[j + 1]) : 0,
            parseInt(ships[i]?.[j - 1]) ? parseInt(ships[i]?.[j - 1]) : 0,
            parseInt(ships[i + 1]?.[j]) ? parseInt(ships[i + 1]?.[j]) : 0,
            parseInt(ships[i - 1]?.[j]) ? parseInt(ships[i - 1]?.[j]) : 0
          );
          ships[i][j] = currentNumber;
        } else {
          result.count++;
          ships[i][j] = result.count;
        }
        numberOfShips(ships, result);
      }
    });
  });
  return result.count;
}

let ships = [
  ["X", "X", ".", "X"],
  [".", ".", ".", "X"],
  [".", ".", ".", "X"],
  [".", ".", ".", "."],
];

console.log(numberOfShips(ships));

ships = [
  ["X", "X", ".", "X"],
  [".", ".", ".", "X"],
  ["X", "X", ".", "X"],
  [".", ".", "X", "."],
];

console.log(numberOfShips(ships));

ships = [
  ["X", ".", "X", "."],
  [".", "X", ".", "X"],
  ["X", ".", "X", "."],
  [".", "X", ".", "X"],
];

console.log(numberOfShips(ships));

ships = [
  [".", "X", ".", "X"],
  [".", "X", ".", "."],
  ["X", ".", "X", "X"],
  ["X", ".", ".", "."],
];

console.log(numberOfShips(ships));
