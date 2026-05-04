/*
You are given a 2D grid where 1 represents an intact tile and 0 represents a broken tile.
A "broken region" is a group of connected 0s (connected horizontally or vertically).
Find the minimum number of tiles you need to repair to ensure no broken region has an
area larger than k.

Examples:

const grid = [
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 1],
];
const k = 2;

let newGrid = [
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [0, 0, 1, 1],
];
let newK = 1;

minRepairs(grid, k)
> 2

minRepairs(newGrid, newK)
> 3
*/

function minRepairs(grid, k) {
  // deep-copy each orientation so mutations don't bleed across runs
  const copy = grid.map((row) => [...row]);
  const symGrid = grid.map((row) => row.toReversed());
  const revGrid = [...grid].reverse().map((row) => [...row]);
  const revSymGrid = [...grid].reverse().map((row) => row.toReversed());
  return Math.min(
    minRepairsOneDirection(copy, k),
    minRepairsOneDirection(symGrid, k),
    minRepairsOneDirection(revGrid, k),
    minRepairsOneDirection(revSymGrid, k),
  );
}

function minRepairsOneDirection(grid, k) {
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[i].length; j++)
      if (grid[i][j] === 0) fillingZeros(grid, i, j, k);

  let cpt = 0;
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[i].length; j++) if (grid[i][j] === 2) cpt++;
  return cpt;
}

function fillingZeros(grid, idx, jdx, k) {
  grid[idx][jdx] = -1;
  let count = 1;

  // follow 0s horizontally and vertically using repeated passes until k cells are marked
  let changed = true;
  while (changed && count < k) {
    changed = false;
    for (let i = 0; i < grid.length && count < k; i++) {
      for (let j = 0; j < grid[i].length && count < k; j++) {
        if (grid[i][j] !== -1) continue;
        if (i > 0 && grid[i - 1][j] === 0 && count < k) {
          grid[i - 1][j] = -1;
          count++;
          changed = true;
        }
        if (i < grid.length - 1 && grid[i + 1][j] === 0 && count < k) {
          grid[i + 1][j] = -1;
          count++;
          changed = true;
        }
        if (j > 0 && grid[i][j - 1] === 0 && count < k) {
          grid[i][j - 1] = -1;
          count++;
          changed = true;
        }
        if (j < grid[i].length - 1 && grid[i][j + 1] === 0 && count < k) {
          grid[i][j + 1] = -1;
          count++;
          changed = true;
        }
      }
    }
  }

  // mark the 0 neighbours of the filled region as "to repair"
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== -1) continue;
      if (i > 0 && grid[i - 1][j] === 0) grid[i - 1][j] = 2;
      if (i < grid.length - 1 && grid[i + 1][j] === 0) grid[i + 1][j] = 2;
      if (j > 0 && grid[i][j - 1] === 0) grid[i][j - 1] = 2;
      if (j < grid[i].length - 1 && grid[i][j + 1] === 0) grid[i][j + 1] = 2;
    }
  }
}

let grid = [
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 1],
];
let k = 2;

console.log(minRepairs(grid, k));

grid = [
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [0, 0, 1, 1],
];
k = 1;

console.log(minRepairs(grid, k));

grid = [
  [0, 1, 0],
  [0, 1, 0],
];
k = 1;

console.log(minRepairs(grid, k));
