/**
At the Magic Cookie Factory, cookies are baked in factorial quantities.
A cookie is "perfectly round" if its size ends with a zero.
Write a function to determine how many perfectly round cookies will be
made when baking with n! ingredients.
 */
function countPerfectlyRoundCookies(n) {
  // The way to obtain 0: (2, 5)^n ...
  // The limiting number is 5 (we have a lot of 2s)
  // The number of 5's in the multiplication is called
  // p-adic valuation of 5
  const maxExponent = Math.ceil(Math.log(n) / Math.log(5));
  return Array.from({ length: maxExponent }, (_, idx) => idx + 1).reduce(
    (acc, v) => acc + Math.floor(n / Math.pow(5, v)),
    0
  );
}
console.log(countPerfectlyRoundCookies(5));
console.log(countPerfectlyRoundCookies(10));
console.log(countPerfectlyRoundCookies(100));
