/*
Given a string str, find a contiguous substring of length 10 whose characters
can be bijectively mapped to the moves {U,D,L,R,B,A} so that the substring decodes
to the Konami code "UUDDLRLRBA" (a character always maps to the same move,
and two different moves can’t share a character). Return a valid mapping as an object.

Example:

konamiMapping("xx2233454590yy11110")
> { "0": "A", "2": "U", "3": "D", "4": "L", "5": "R", "9": "B" }

konamiMapping("sduwahoda22ii0d0dbn")
> { "0": "L", "2": "U", "i": "D", "d": "R", "b": "B", "n": "A" }
*/

function konamiMapping(str) {
  return str.split("").reduce((acc, _, i) => {
    const substr = str.substring(i, i + 10);
    if (substr.length < 10) return acc;
    const u = substr[0];
    const d = substr[2];
    const l = substr[4];
    const r = substr[5];
    const a = substr[9];
    const b = substr[8];
    if (
      substr === `${u}${u}${d}${d}${l}${r}${l}${r}${b}${a}` &&
      new Set([u, d, l, r, a, b]).size === 6
    )
      return {
        [a]: "A",
        [b]: "B",
        [u]: "U",
        [d]: "D",
        [l]: "L",
        [r]: "R",
      };
    return acc;
  }, "");
}

console.log(konamiMapping("xx2233454590yy11110"));
console.log(konamiMapping("sduwahoda22ii0d0dbn"));
