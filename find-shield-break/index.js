/*
Given an array of attack damages and a shield capacity for a spaceship,
return the index when cumulative damage exceeds the shield.
Return -1 if shield survives.
*/

function findShieldBreak(damages, capacity) {
  return damages.reduce(
    (acc, val, idx) => {
      if (acc.idx !== -1) return acc;
      acc.sum += val;
      if (acc.sum >= capacity && acc.idx === -1) {
        acc.idx = idx;
      }
      return acc;
    },
    {
      idx: -1,
      sum: 0,
    }
  ).idx;
}

console.log(findShieldBreak([10, 20, 30, 40], 50));
console.log(findShieldBreak([1, 2, 3, 4], 20));
console.log(findShieldBreak([50], 30));
