/*
Given an array of object weights and an array of suitcase capacities,
determine the minimum number of suitcases needed to pack all objects,
where each object must go into exactly one suitcase and each suitcase
can hold any number of objects up to its capacity.
Return -1 if it is impossible to pack all objects.

Examples:

packSuitcases([4, 8, 1, 4, 2], [10, 6, 8]);
> 3

packSuitcases([9, 7, 6], [10, 6]);
> -1
*/

function subSumCombo(coins, target, path = [], res = {}) {
  const sum = path.reduce((acc, v) => acc + v, 0);
  if (sum === target) {
    if (!res[0]) res[0] = [];
    res[0].push(path);
    return;
  }
  if (sum > target) {
    return;
  }
  if (coins.length === 0) {
    if (sum > 0) {
      const diff = target - sum;
      if (!res[diff]) res[diff] = [];
      res[diff].push(path);
    }
    return;
  }
  const [coin, ...rest] = coins;
  subSumCombo([...rest], target, [...path, coin], res);
  subSumCombo([...rest], target, [...path], res);
  return res;
}

function packSuitcases(
  objects,
  suitcases,
  res = { count: 0, lastObjects: objects },
) {
  // We should remove the most full packs little by little ...
  // Each time we remove the fullest and the biggest and recompute
  // the subSumCombo for the remaining objects and suitcases
  const map = suitcases.reduce((acc, v) => {
    acc[v] = subSumCombo(objects, v);
    return acc;
  }, {});
  const minFilledPacks = Object.entries(map)
    .map((e) => [
      parseInt(e[0]),
      Math.min(...Object.keys(e[1]).map((v) => parseInt(v))),
    ])
    .filter((e) => isFinite(e[1]));
  const minRemain = Math.min(...minFilledPacks.map((e) => e[1]));
  const mostFitPack = minFilledPacks.findLast((e) => e[1] === minRemain)?.[0];
  const removedObjects = map[mostFitPack]?.[minRemain]?.[0];
  if (mostFitPack) {
    const remainingSuitcases = suitcases.filter((e) => e !== mostFitPack);
    const remainingObjects = objects.filter((e) => !removedObjects.includes(e));
    res.count += 1;
    res.lastObjects = remainingObjects;
    packSuitcases(remainingObjects, remainingSuitcases, res);
  }

  return res.lastObjects.length > 0 ? -1 : res.count;
}

console.log(packSuitcases([4, 8, 1, 4, 2], [10, 6, 8]));
console.log(packSuitcases([9, 7, 6], [10, 6]));
console.log(packSuitcases([9, 7], [6]));
