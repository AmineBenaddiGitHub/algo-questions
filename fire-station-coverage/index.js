/*
You're given a 2D grid representing a city where each cell is either empty (0),
a fire station (1), or a building (2).
Fire stations can serve buildings based on horizontal + vertical moves only.
Return a 2D grid where each cell shows the minimum distance to the nearest
fire station.

Examples:

> fireStationCoverage([
  [2, 0, 1],
  [0, 2, 0],
  [1, 0, 2]
])
> [[2, 1, 0],  
   [1, 2, 1],
   [0, 1, 2]]

> fireStationCoverage([
  [1, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 1]
])
> [[0, 1, 2, 0],
   [1, 2, 2, 1],
   [1, 2, 2, 1],
   [0, 1, 2, 0]]
*/

function closestFireStation(map, pos, path = { count: 0 }, res = []) {
  if (map[pos[0]][pos[1]] === 1) {
    res.push(path);
    return path.count;
  }

  map[pos[0]][pos[1]] = 3;

  const directions = [];

  if (pos[0] > 0 && map[pos[0] - 1][pos[1]] !== 3)
    directions.push([pos[0] - 1, pos[1]]);

  if (pos[1] > 0 && map[pos[0]][pos[1] - 1] !== 3)
    directions.push([pos[0], pos[1] - 1]);

  if (pos[0] < map.length - 1 && map[pos[0] + 1][pos[1]] !== 3)
    directions.push([pos[0] + 1, pos[1]]);

  if (pos[1] < map[pos[0]].length - 1 && map[pos[0]][pos[1] + 1] !== 3)
    directions.push([pos[0], pos[1] + 1]);

  if (directions.length === 0) return Infinity;

  return Math.min(
    ...directions.map((e) =>
      closestFireStation(
        structuredClone(map),
        e,
        {
          count: path.count + 1,
        },
        res,
      ),
    ),
  );
}

function fireStationCoverage(map) {
  return Array.from({ length: map.length }, (_, idx) =>
    Array.from({ length: map[idx].length }, (_, jdx) =>
      closestFireStation(structuredClone(map), [idx, jdx]),
    ),
  );
}

console.log(
  fireStationCoverage([
    [1, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 1],
  ]),
);
