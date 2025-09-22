/*
Write a function that determines if a number is abundant, deficient, perfect, or amicable. (Thanks Raymond for this one!)

Examples:

whatKindOfNumber(6)
> 'perfect'

whatKindOfNumber(12)
> 'abundant'

whatKindOfNumber(4)
> 'deficient'
*/

function whatKindOfNumber(nb) {
  const sumDivisors = Array.from({ length: nb - 1 }).reduce((acc, _, idx) => {
    if (nb % (idx + 1) === 0) return acc + (idx + 1);
    return acc;
  }, 0);
  if (nb > sumDivisors) return "deficient";
  if (nb < sumDivisors) return "abundant";
  return "perfect";
}

console.log(whatKindOfNumber(6));
console.log(whatKindOfNumber(12));
console.log(whatKindOfNumber(4));
