/*
Given a string of . and _ where _ represents a blink,
return the longest gap between blinks.

Examples:
countBlinks("_..__...._.")
> 4

countBlinks("...._")
> 0
*/

function countBlinks(str) {
  return str.split("").reduce(
    (acc, v) => {
      if (v === "_") {
        if (!acc.blink) acc.blink = true;
        if (acc.ctr > acc.max) acc.max = acc.ctr;
        acc.ctr = 0;
      }
      if (v === "." && acc.blink) acc.ctr++;
      return acc;
    },
    {
      blink: false,
      max: 0,
      ctr: 0,
    },
  ).max;
}

console.log(countBlinks("_..__...._."));
console.log(countBlinks("...._"));
console.log(countBlinks("...._..."));
console.log(countBlinks("....._...._"));
