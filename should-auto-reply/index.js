/*
Given inclusive unavailable date ranges, an array of override dates,
and a message date, return true if the message should receive an auto-reply
and false otherwise.
A message gets an auto-reply only when it falls inside at least one unavailable
range and is not an override date.

Examples:

const unavailableRanges1 = [
  ["2026-07-01", "2026-07-10"], 
  ["2026-08-15", "2026-08-20"]
];
const overrideDates1 = ["2026-07-04"];
const messageDate1 = "2026-07-05";

const unavailableRanges2 = [["2026-07-01", "2026-07-10"]];
const overrideDates2 = ["2026-07-04"];
const messageDate2 = "2026-07-04";

const unavailableRanges3 = [["2026-07-01", "2026-07-10"]];
const overrideDates3 = [];
const messageDate3 = "2026-07-11";

shouldAutoReply(unavailableRanges1, overrideDates1, messageDate1)
> true
shouldAutoReply(unavailableRanges2, overrideDates2, messageDate2)
> false
shouldAutoReply(unavailableRanges3, overrideDates3, messageDate3)
> false
*/

const unavailableRanges1 = [
  ["2026-07-01", "2026-07-10"],
  ["2026-08-15", "2026-08-20"],
];
const overrideDates1 = ["2026-07-04"];
const messageDate1 = "2026-07-05";

const unavailableRanges2 = [["2026-07-01", "2026-07-10"]];
const overrideDates2 = ["2026-07-04"];
const messageDate2 = "2026-07-04";

const unavailableRanges3 = [["2026-07-01", "2026-07-10"]];
const overrideDates3 = [];
const messageDate3 = "2026-07-11";

function shouldAutoReply(ranges, overrides, date) {
  let shouldIAutoReply = false;
  const messageDate = new Date(date);
  for (let r of ranges) {
    const startDate = new Date(r[0]);
    const endDate = new Date(r[1]);
    endDate.setDate(endDate.getDate() + 1);
    if (
      messageDate.getTime() >= startDate.getTime() &&
      messageDate.getTime() < endDate.getTime()
    ) {
      shouldIAutoReply = true;
      break;
    }
  }
  for (let o of overrides) {
    if (o === date) {
      shouldIAutoReply = false;
      break;
    }
  }
  return shouldIAutoReply;
}

console.log(shouldAutoReply(unavailableRanges1, overrideDates1, messageDate1));
console.log(shouldAutoReply(unavailableRanges2, overrideDates2, messageDate2));
console.log(shouldAutoReply(unavailableRanges3, overrideDates3, messageDate3));
