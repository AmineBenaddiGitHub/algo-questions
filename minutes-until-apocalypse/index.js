/*
On Halloween night, a town is represented by a grid where 0 is an empty lot,
1 is a living person, and 2 is an infected zombie.
Every minute, infection spreads to any living person directly above, below,
left, or right of an infected zombie.
Return the minimum number of minutes until no living people remain,
or -1 if some people can never be reached.

Examples:

> minutesUntilApocalypse([
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1]
])
> 4

> minutesUntilApocalypse([
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1]
])
> -1
*/

function minutesUntilApocalypse(grid) {
  let isAllowed = true,
    cpt = 0,
    newGrid = structuredClone(grid);
  while (isAllowed) {
    newGrid = structuredClone(grid);
    isAllowed = false;
    grid.forEach((e, i) => {
      e.forEach((v, j) => {
        if (
          v === 1 &&
          ((i - 1 >= 0 && grid[i - 1][j] === 2) ||
            (i + 1 <= grid.length - 1 && grid[i + 1][j] === 2) ||
            (j - 1 >= 0 && grid[i][j - 1] === 2) ||
            (j + 1 <= grid[i].length - 1 && grid[i][j + 1] === 2))
        ) {
          newGrid[i][j] = 2;
          isAllowed = true;
        }
      });
    });
    grid = structuredClone(newGrid);
    if (isAllowed) cpt++;
  }
  const stillLive = grid.some((e) => e.find((v) => v === 1));
  return stillLive ? -1 : cpt;
}

console.log(
  minutesUntilApocalypse([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
);

console.log(
  minutesUntilApocalypse([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]),
);
