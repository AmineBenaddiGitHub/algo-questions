/*
Santa is conducting his daily roll call for the reindeer, but the printer has mistakenly printed all their names backwards.
To take attendance properly, he urgently needs a tool to reverse the reindeer names and put them in alphabetical order!
Can you help Santa?
*/

function rollCall(arr) {
  return arr.map((e) => e.split("").reverse().join("")).toSorted();
}

console.log(rollCall(["yzneT", "ydissaC", "enimA"]));
console.log(
  rollCall([
    "rennuD",
    "nexiV",
    "recnarP",
    "temoC",
    "neztilB",
    "recnaD",
    "diduC",
    "rehsaD",
    "hploduR",
  ])
);
console.log(rollCall(["A", "B", "C"]));
