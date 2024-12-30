/*
Given a year, return the day of the week for New Year's Day of that year.
*/

const numToDay = {
  0: "Monday",
  1: "Tuesday",
  2: "Wednesday",
  3: "Thursday",
  4: "Friday",
  5: "Saturday",
  6: "Sunday",
};

function newYearDay(yyyy) {
  return numToDay[new Date(yyyy, 0, 0, 0, 0, 0, 0).getDay()];
}

console.log(newYearDay(2024));
console.log(newYearDay(2025));
