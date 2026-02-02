/*
February 2026 is a perfect month! Write a function that returns the closest
previous and next perfect month around the given Gregorian year.

Examples:

nearestPerfectMonths(2025)
> { prev: "2021-02", next: "2026-02" }

nearestPerfectMonths(2026)
> { prev: "2026-02", next: "2027-02" }
*/

function nearestPerfectMonths(year) {
  return {
    prev: `${nearestYear(year, "-")}-02`,
    next: `${nearestYear(year + 1, "+")}-02`,
  };
}

function nearestYear(year, sign) {
  if (!isLeap(year) && [0, 6].includes(new Date(year, 1, 0).getDay()))
    return year;
  return nearestYear(year + (sign === "+" ? 1 : -1));
}

function isLeap(year) {
  return year % 4 === 0 && year % 100 !== 0;
}

console.log(nearestPerfectMonths(2025));
console.log(nearestPerfectMonths(2026));
