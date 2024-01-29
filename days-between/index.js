/**
Write a function called daysBetween that takes in two dates, and returns the number of days between those dates.
You can choose the date format you'd like to accept!

Example:

> daysBetween('Jan 1, 2024', 'Jan 29, 2024')
> 28

> daysBetween('Feb 29, 2020', 'Oct 31, 2023')
> 1348
 */

function daysBetween(str1, str2) {
  const date1 = new Date(str1);
  const date2 = new Date(str2);
  if (Number.isNaN(date1) || Number.isNaN(date2)) {
    return NaN;
  }
  return Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);
}

console.log(daysBetween("Jan 1, 2024", "Jan 29, 2024"));
console.log(daysBetween("Feb 29, 2020", "Oct 31, 2023"));
