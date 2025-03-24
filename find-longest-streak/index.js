/*
Write a function that finds the longest streak of consecutive true values in a
boolean array that meets or exceeds a given streak goal.
Return 0 if no such streak exists.
*/

function findLongestStreak(arr, target) {
  const max = Math.max(
    ...arr
      .reduce(
        (acc, v, idx) => {
          if (v) {
            acc.at(-1).cpt += 1;
          } else {
            acc.push({ idx, cpt: 0 });
          }
          return acc;
        },
        [{ idx: 0, cpt: 0 }]
      )
      .map((e) => e.cpt)
  );
  return max >= target ? max : 0;
}

console.log(findLongestStreak([true, true, false, true, true, true], 3));
console.log(findLongestStreak([true, true, true, false, true], 4));
console.log(findLongestStreak([true, true, true, true], 2));
