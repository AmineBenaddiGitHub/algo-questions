/*
Given a queue of customer names and an integer n, move every nth customer to the end
of the line while preserving relative order otherwise.

Example:

shuffleLine(["Ada", "Ben", "Cam", "Diya", "Eli", "Fay"], 3);
> ['Ada', 'Ben', 'Diya', 'Eli', 'Cam', 'Fay']
// Every 3rd customer is moved to the end, so "Cam" and "Fay"
// are moved after the others, preserving their original order.

shuffleLine(["A", "B", "C", "D", "E"], 2);
> ['A', 'C', 'E', 'B', 'D']

shuffleLine(["Mo", "Noah", "Oli"], 1);
> ['Mo', 'Noah', 'Oli']

*/

function shuffleLine(arr, pos) {
  return [
    ...arr.filter((_, idx) => (idx + 1) % pos !== 0),
    ...arr.filter((_, idx) => (idx + 1) % pos === 0),
  ];
}

console.log(shuffleLine(["Ada", "Ben", "Cam", "Diya", "Eli", "Fay"], 3));
console.log(shuffleLine(["A", "B", "C", "D", "E"], 2));
console.log(shuffleLine(["Mo", "Noah", "Oli"], 1));
