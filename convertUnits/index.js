/*
Write a function that converts between metric and imperial units.
Break up the units into millimeters, centimeters, and meters for metric,
and into inches and feet for imperial, up to 2 decimal places.
*/

function convertUnits(nbr, unit) {
  let convertedNbr = null;
  switch (unit) {
    case "ft":
      // 1 ft -> 0.3048 m
      convertedNbr = nbr * 0.3048;
      return `${Math.floor(convertedNbr)}m ${Math.floor(
        100 * (convertedNbr % 1)
      )}cm ${Math.round(100 * ((100 * (convertedNbr % 1)) % 1)) / 10}mm`;
    case "cm":
      // 1cm -> 0,03281 ft
      convertedNbr = nbr * 0.03281;
      return `${Math.floor(convertedNbr)}ft ${
        Math.round(1200 * (convertedNbr % 1)) / 100
      }in`;
    case "m":
      return convertUnits(nbr * 100, "cm");
    case "in":
      return convertUnits(nbr / 12, "ft");
    default:
      break;
  }
}

console.log(convertUnits(7, "ft"));
console.log(convertUnits(44, "cm"));
console.log(convertUnits(5, "m"));
console.log(convertUnits(1357, "in"));
