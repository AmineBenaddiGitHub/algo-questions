/*
Given an n x m grid, an odd integer size, and a coordinate (row, col) representing
where a firework explodes, return all grid coordinates
impacted by the blast.
A firework affects every cell within Math.floor(size / 2) rows and columns of the
center, clipped to the grid boundaries.

Example:

> getImpactedCoordinates(5, 5, 3, 1, 1)
> [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]

> getImpactedCoordinates(3, 3, 1, 2, 1)
> [[2,1]]

> getImpactedCoordinates(5, 5, 3, 4, 4)
> [[3,3],[3,4],[4,3],[4,4]]
*/

function getImpactedCoordinates(n, m, s, x, y) {
  let arr = [];
  for (let i = x - Math.floor(s / 2); i <= x + Math.floor(s / 2); i++) {
    for (let j = y - Math.floor(s / 2); j <= y + Math.floor(s / 2); j++) {
      if (i >= 0 && i < n && j >= 0 && j < m) {
        arr.push([i, j]);
      }
    }
  }
  return arr;
}

console.log(getImpactedCoordinates(5, 5, 3, 1, 1));
console.log(getImpactedCoordinates(3, 3, 1, 2, 1));
console.log(getImpactedCoordinates(5, 5, 3, 4, 4));
