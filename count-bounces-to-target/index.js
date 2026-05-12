/*
You are given a 2D grid representing a screen, a starting position for a bouncing object,
a target position, and an initial diagonal direction. On each step, the object moves one
cell diagonally, and if its next move would leave the grid, it "bounces" by reversing the
corresponding row and/or column direction before continuing. Return the number of bounces
needed for the logo to land on the target cell, or -1 if it will loop forever without ever
reaching it.

Examples:

// inputs are grid, start, target, velocity/direction
y
|
0 0 0 0 0 0 0 0
0 0 3 0 0 6 0 0
0 0 0 0 0 0 0 0
0 2 0 A 0 0 7 0
0 0 0 0 0 0 0 0
0 0 0 4 5 0 0 0
0 0 0 0 0 0 0 0
1 0 0 0 0 0 0 8 - x axis



countBouncesToTarget([8,8], [0,0], [3,4], [1,4])
> 2

countBouncesToTarget([3,3], [0,1], [2,1], [1,1]) 
> 1

countBouncesToTarget([4,5], [0,0], [3,3], [1,1]) 
> 0

*/

function countBouncesToTarget(grid, start, target, direction) {
  let path = [],
    position = [...start],
    vector = [...direction],
    bounceNbr = 0;
  while (position[0] !== target[0] || position[1] !== target[1]) {
    const nextIteration = countNextPosition(grid, position, vector);
    position = nextIteration.newPosition;
    bounceNbr += nextIteration.bounceNbr;
    if (
      path.some(
        (e) =>
          e[0][0] === position[0] &&
          e[0][1] === position[1] &&
          e[1][0] === vector[0] &&
          e[1][1] === vector[1],
      )
    ) {
      // we are looping
      break;
    }
    path.push([position, [...vector]]);
  }
  return position[0] === target[0] && position[1] === target[1]
    ? bounceNbr
    : -1;
}

function countNextPosition(grid, position, direction) {
  const newPosition = [position[0] + direction[0], position[1] + direction[1]];
  let bounceNbr = 0;
  while (
    newPosition[0] < 0 ||
    newPosition[0] > grid[0] - 1 ||
    newPosition[1] < 0 ||
    newPosition[1] > grid[1] - 1
  ) {
    if (newPosition[0] > grid[0] - 1) {
      newPosition[0] = 2 * grid[0] - 2 - newPosition[0];
      direction[0] = -direction[0];
      bounceNbr++;
    }
    if (newPosition[1] > grid[1] - 1) {
      newPosition[1] = 2 * grid[1] - 2 - newPosition[1];
      direction[1] = -direction[1];
      bounceNbr++;
    }
    if (newPosition[0] < 0) {
      newPosition[0] = -newPosition[0];
      direction[0] = -direction[0];
      bounceNbr++;
    }
    if (newPosition[1] < 0) {
      newPosition[1] = -newPosition[1];
      direction[1] = -direction[1];
      bounceNbr++;
    }
  }
  return { newPosition, bounceNbr };
}

console.log(countBouncesToTarget([8, 8], [0, 0], [3, 4], [1, 4])); // -1?
console.log(countBouncesToTarget([8, 8], [0, 0], [4, 2], [1, 4])); // 2
console.log(countBouncesToTarget([8, 8], [0, 0], [7, 0], [1, 4])); // 3
console.log(countBouncesToTarget([3, 3], [0, 1], [2, 1], [1, 1])); // 1
console.log(countBouncesToTarget([4, 5], [0, 0], [3, 3], [1, 1])); // 0
