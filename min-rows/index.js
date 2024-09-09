/*
You are given an array of people represented by integers,
where each number corresponds to the number of people in a group.
Determine the minimum number of rows required to seat everyone
such that no group is split across different rows.
You can assume no group will be larger than a given row size!
 */

// Brutforce, not optimal al all!!!

function allPermutations(
  arr,
  path = Array.from({ length: arr.length }).fill(null),
  results = []
) {
  if (arr.length === 0) {
    results.push(path);
    return;
  }
  const elt = arr[0];
  path.forEach((e, idx) => {
    const copyPath = [...path];
    if (e === null) {
      copyPath[idx] = elt;
      allPermutations(arr.slice(1), copyPath, results);
    }
  });
  return results;
}

function numberRow(arr, size) {
  return arr.reduce(
    (acc, e) => {
      const sum = acc.at(-1).reduce((v, x) => v + x, 0) + e;
      if (sum <= size) acc.at(-1).push(e);
      else acc.push([e]);
      return acc;
    },
    [[]]
  ).length;
}

function minRows(arr, size) {
  return Math.min(...allPermutations(arr).map((perm) => numberRow(perm, size)));
}

console.log(minRows([4, 8, 3, 5, 6], 10));
console.log(minRows([4, 5, 4, 3, 3], 10));
console.log(minRows([7, 7, 8, 9, 6], 10));
