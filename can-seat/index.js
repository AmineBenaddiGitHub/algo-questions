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

function canSeat(arr, constraints, nbrTables = 2) {
  const tables = Array.from({ length: nbrTables }, (_) => new Set());
  cycle: for (let i = 0; i < arr.length; i++) {
    const eConstraints = new Set(
      constraints.filter((v) => v.includes(arr[i])).flat(),
    );
    for (let j = 0; j < nbrTables; j++) {
      if (tables[j].intersection(eConstraints).size === 0) {
        tables[j].add(arr[i]);
        continue cycle;
      }
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
