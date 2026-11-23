/*
You have two tables, a list of guests, and pairs of guests who can’t sit at the same table.
Return true if you can seat everyone while respecting those pairs, or false otherwise.

Examples:

> canSeat(["Ang", "Ben", "Cam"], [["Ang", "Ben"], ["Ben", "Cam"]]);
// true

> canSeat(["Ang", "Ben", "Cam"], [
  ["Ang", "Ben"], ["Ben", "Cam"], ["Cam", "Ang"]
]);
// false

> canSeat(["Ang", "Ben", "Cam"], []);
// true
*/

function canSeat(arr, constraints) {
  const table1 = new Set(),
    table2 = new Set();
  for (let i = 0; i < arr.length; i++) {
    const eConstraints = new Set(
      constraints.filter((v) => v.includes(arr[i])).flat(),
    );
    if (table1.intersection(eConstraints).size === 0) {
      table1.add(arr[i]);
      continue;
    }
    if (table2.intersection(eConstraints).size === 0) {
      table2.add(arr[i]);
      continue;
    }
    return false;
  }
  return true;
}

console.log(
  canSeat(
    ["Ang", "Ben", "Cam"],
    [
      ["Ang", "Ben"],
      ["Ben", "Cam"],
    ],
  ),
);

console.log(
  canSeat(
    ["Ang", "Ben", "Cam"],
    [
      ["Ang", "Ben"],
      ["Ben", "Cam"],
      ["Cam", "Ang"],
    ],
  ),
);

console.log(canSeat(["Ang", "Ben", "Cam"], []));
