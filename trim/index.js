/*
Write a function trim(type, s) that trims a string based on a trim type.
The type parameter is one of four modes: "leading" (remove leading spaces),
"trailing" (remove trailing spaces), "both" (remove leading and trailing 
spaces), or "compress" (collapse any sequence of multiple consecutive spaces
into a single space, but leave single spaces intact).
Return the trimmed string.

Example:

trim("leading", "   hello world   ")
> "hello world   "
trim("trailing", "   hello world   ")
> "   hello world"
trim("both", "   hello world   ")
> "hello world"
trim("compress", "hello   world  !")
> "hello world !"
trim("compress", "  hi   there  ")
> " hi there "
*/

function trim(type, s) {
  const arr = s.split("");
  let bIdx, eIdx;
  switch (type) {
    case "leading":
      bIdx = arr.findIndex((e) => e !== " ");
      return arr.slice(Math.max(bIdx, 0)).join("");
    case "trailing":
      eIdx = arr.findLastIndex((e) => e !== " ");
      return arr.slice(0, Math.min(eIdx, arr.length) + 1).join("");
    case "both":
      bIdx = arr.findIndex((e) => e !== " ");
      eIdx = arr.findLastIndex((e) => e !== " ");
      return arr
        .slice(Math.max(bIdx, 0), Math.min(eIdx, arr.length) + 1)
        .join("");
    case "compress":
      return arr
        .map((e, idx) =>
          e === " " && idx > 0 && (arr[idx - 1] === " " || arr[idx - 1] === "")
            ? ""
            : e,
        )
        .join("");
    default:
      return s;
  }
}

console.log(trim("leading", "   hello world   ") === "hello world   ");
console.log(trim("trailing", "   hello world   ") === "   hello world");
console.log(trim("both", "   hello world   ") === "hello world");
console.log(trim("compress", "hello   world  !") === "hello world !");
console.log(trim("compress", "  hi   there  ") === " hi there ");
