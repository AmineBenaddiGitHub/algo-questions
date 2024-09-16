/*
You are given an integer n representing the total points a team wants to score in an American football game.
You need to determine the number of unique ways the team can achieve exactly n points using any combination
of touchdowns (6 points), field goals (3 points), or safeties (2 points).
*/

function firstOrderEq(obj1, obj2) {
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  for (const key in obj2) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

function waysToScore(nbr, path = {}, results = [], points = [2, 3, 6]) {
  if (nbr === 0) {
    if (!results.some((res) => firstOrderEq(res, path))) results.push(path);
    return;
  }
  points.forEach((p) => {
    if (nbr - p >= 0) {
      const copyPath = structuredClone(path);
      copyPath[p] = copyPath[p] ? copyPath[p] + 1 : 1;
      waysToScore(nbr - p, copyPath, results, points);
    }
  });
  return results.length;
}

console.log(waysToScore(5));
console.log(waysToScore(12));
console.log(waysToScore(6));
