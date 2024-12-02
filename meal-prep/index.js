/**
You're organizing a family meal. Given a list of dishes and their respective preparation times,
return the minimum number of hours required to prepare all dishes if you can cook up to two dishes simultaneously.
If a dish takes longer than the remaining time of the current hour, it will be moved to the next hour.
 */

function mealPrep(dishes) {
  let i = 0;
  dishes.sort((a, b) => b - a);
  const sum = dishes.reduce((acc, v) => acc + v, 0);
  // max possible length
  const schedule = Array.from({ length: Math.ceil(sum / 60) }, () => [0, 0]);
  while (dishes.length !== 0) {
    let e = dishes[0];
    if (schedule[i][0] + e <= 60) {
      schedule[i][0] += e;
    } else if (schedule[i][1] + e <= 60) {
      schedule[i][1] += e;
    } else {
      const idxToFill = schedule[i][0] <= schedule[i][1] ? 0 : 1;
      e = e - schedule[i][idxToFill];
      schedule[i][idxToFill] = 60;
      i++;
      const lastingHours = Math.floor(e / 60);
      const remainingTime = e % 60;
      for (let j = i; j < i + lastingHours; j++) {
        schedule[j][idxToFill] = 60;
      }
      if (remainingTime > 0)
        schedule[i + lastingHours][idxToFill] = remainingTime;
    }
    dishes.shift();
  }
  return i + 1;
}

console.log(mealPrep([120]));
console.log(mealPrep([30, 30, 30, 20]));
console.log(mealPrep([30, 25, 45, 30, 60, 15]));
