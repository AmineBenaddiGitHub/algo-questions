/*
A store is going out of business and will reduce the price of all products by 10% every
week leading up to the closing date. Given the closingDate, visitDate, and the originalPrice
of a product, write a function that returns the price of the product on the visitDate.
You can assume that originalPrice is a positive number.
*/

function calculatePrice(closingDate, visitDate, originalPrice) {
  const numberOfWeeks = Math.max(
    Math.floor(
      (new Date(closingDate).getTime() - new Date(visitDate).getTime()) /
        (7 * 24 * 60 * 60 * 1000)
    ),
    0
  );

  return Math.floor(originalPrice * Math.pow(0.9, numberOfWeeks) * 100) / 100;
}

console.log(calculatePrice("2025-04-01", "2025-03-03", 100));
console.log(calculatePrice("2025-04-01", "2025-03-15", 50));
console.log(calculatePrice("2025-04-01", "2025-04-15", 75));
