/*
Given an array of daily temperatures and a number drop, return an array
where each element is how many days you'd wait until it's at least
drop degrees colder than that day. If that never happens, put 0.

Examples:

> firstFrost([70, 68, 72, 60, 65, 55], 5)
> [3, 2, 1, 2, 1, 0]

> firstFrost([50, 49, 48], 5)
> [0, 0, 0]

> firstFrost([40, 30, 45, 20], 10)
> [1, 2, 1, 0]
*/

function firstFrost(temperatures, drop) {
  return temperatures.map((e, idx) =>
    Math.max(
      temperatures.slice(idx).findIndex((v) => e - v >= drop),
      0,
    ),
  );
}

console.log(firstFrost([70, 68, 72, 60, 65, 55], 5));
console.log(firstFrost([50, 49, 48], 5));
console.log(firstFrost([40, 30, 45, 20], 10));
