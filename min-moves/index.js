/*
You have a backpack lock's starting position, and the code to unlock it,
represented as two strings of integers.
In one move, you may rotate any single digit one step up or down,
with 0 and 9 considered adjacent.
Return the minimum number of moves needed to transform the starting code
into the unlock code.

Example:

minMoves("8051", "1199")
> 10

minMoves("000", "555")
> 15

minMoves("109", "990")
> 4
*/

function minMoves(pos, code) {
  return pos.split("").reduce((acc, e, idx) => {
    const a = parseInt(e),
      b = parseInt(code[idx]),
      min = Math.min(a, b),
      max = Math.max(a, b);
    return acc + Math.min(max - min, min + 10 - max);
  }, 0);
}

console.log(minMoves("8051", "1199"));
console.log(minMoves("000", "555"));
console.log(minMoves("109", "990"));
