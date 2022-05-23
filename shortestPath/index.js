/**
Given an n x m matrix where all of the units are 0s except for an 1 for “start”, a 2 for “end”, and 3s for walls,
find the shortest paths that you can take to get from 1 to 2, while working around 3s.

Example:

let grid = [
[1,0,0],
[0,0,2]
]

let grid2 = [
[1,3,0],
[0,0,2]
]

$ startToEnd(grid)
$ [['right', 'right', 'down'], ['right', 'down', 'right'], ['down', 'right', 'right']]

$ startToEnd(grid2)
$ [['down', 'right', 'right']]

*/

const grid1 = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 3, 2],
];

const grid2 = [
  [1, 3, 0],
  [0, 0, 0],
  [0, 3, 2],
];

const grid3 = [
  [1, 0, 0],
  [0, 0, 2],
];

const grid4 = [
  [1, 3, 0],
  [0, 0, 2],
];

// If grid[0][0] === 1 and grid[grid.length - 1][grid[0].length - 1] === 2
// then all short paths are composed by downs and rights
const pathsWithDownsAndRights = (
  grid,
  position = [0, 0],
  path = [],
  paths = []
) => {
  if (
    grid[position[0] + 1] &&
    [0, 2].includes(grid[position[0] + 1][position[1]])
  ) {
    const tmp = [...path, "down"];
    if (grid[position[0] + 1][position[1]] === 0) {
      pathsWithDownsAndRights(grid, [position[0] + 1, position[1]], tmp, paths);
    } else if (grid[position[0] + 1][position[1]] === 2) paths.push(tmp);
  }
  if ([0, 2].includes(grid[position[0]][position[1] + 1])) {
    const tmp = [...path, "right"];
    if (grid[position[0]][position[1] + 1] === 0) {
      pathsWithDownsAndRights(grid, [position[0], position[1] + 1], tmp, paths);
    } else if (grid[position[0]][position[1] + 1] === 2) paths.push(tmp);
  }
  return paths;
};

const startToEnd = (grid) => {
  const paths = pathsWithDownsAndRights(grid);
  const minPath = Math.min(...paths.map((e) => e.length));
  return paths.filter((e) => e.length === minPath);
};

console.log(startToEnd(grid1));
console.log(startToEnd(grid2));
console.log(startToEnd(grid3));
console.log(startToEnd(grid4));
