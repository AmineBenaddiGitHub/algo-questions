/*
Given a year and month, return an array containing every date in that month that falls
on a Sunday. Return each date in YYYY-MM-DD format.

Examples:

> getSundays(2026, 9)
> [ '2026-09-06', '2026-09-13', '2026-09-20', '2026-09-27' ]

> getSundays(2024, 2)
> [ '2024-02-04', '2024-02-11', '2024-02-18', '2024-02-25' ]

*/

function getSundays(year, month) {
  return Array.from({ length: 31 }, (_, idx) => {
    const date = new Date(year, month - 1, idx);
    if (date.getDay() === 6)
      return `${year}-${month.toString().padStart(2, "0")}-${(idx + 1)
        .toString()
        .padStart(2, "0")}`;
    return null;
  }).filter((e) => e);
}

console.log(getSundays(2026, 9));
console.log(getSundays(2024, 2));
