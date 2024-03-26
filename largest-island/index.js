/*
 Given a 2D array of 0s and 1s, where 0 represents water and 1 represents land.
 Return the size of the largest "island" in the water.
 */

const map1 = [
  [0, 1, 1, 1, 0, 0, 0, 1, 1],
  [0, 1, 1, 1, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 0, 1, 1, 1, 0],
];

const map2 = structuredClone(map1);
const map3 = structuredClone(map1);

function unvisitedParcel(map) {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 1) return [i, j];
    }
  }
  return undefined;
}

function colorParcel(map, point, cpt) {
  map[point[0]][point[1]] = cpt;
  if (point[0] > 0 && map[point[0] - 1][point[1]] === 1) {
    colorParcel(map, [point[0] - 1, point[1]], cpt);
  }
  if (point[0] < map.length - 1 && map[point[0] + 1][point[1]] === 1) {
    colorParcel(map, [point[0] + 1, point[1]], cpt);
  }
  if (point[1] > 0 && map[point[0]][point[1] - 1] === 1) {
    colorParcel(map, [point[0], point[1] - 1], cpt);
  }
  if (
    point[1] < map[point[0]].length - 1 &&
    map[point[0]][point[1] + 1] === 1
  ) {
    colorParcel(map, [point[0], point[1] + 1], cpt);
  }
  return map;
}

function islandSize(map, tag) {
  let res = 0;
  for (const arr of map) {
    for (const elt of arr) {
      if (elt === tag) res++;
    }
  }
  return res;
}

function largestIsland(map) {
  let tag = 2,
    size = 0;
  while (true) {
    const res = unvisitedParcel(map);
    if (res) {
      colorParcel(map, res, tag);
      const tagSize = islandSize(map, tag);
      if (tagSize > size) size = tagSize;
      tag++;
    } else {
      break;
    }
  }
  return size;
}

function numberOfIslands(map) {
  let tag = 2;
  while (true) {
    const res = unvisitedParcel(map);
    if (res) {
      colorParcel(map, res, tag);
      tag++;
    } else {
      break;
    }
  }
  return tag - 2;
}

function islandsStats(map) {
  let tag = 2,
    stats = {};
  while (true) {
    const res = unvisitedParcel(map);
    if (res) {
      colorParcel(map, res, tag);
      const tagSize = islandSize(map, tag);
      stats[tag] = tagSize;
      tag++;
    } else {
      break;
    }
  }
  return Object.fromEntries(
    Object.entries(stats).map((e) => [`island-${e[0] - 1}`, e[1]])
  );
}

console.log(largestIsland(map1));
console.log(numberOfIslands(map2));
console.log(islandsStats(map3));
