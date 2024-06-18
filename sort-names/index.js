/*
Write a function that takes a list of names and returns the names sorted
by the number of vowels in each name in descending order.
*/

function numberVowels(str) {
  return str
    .split("")
    .map((e) => e.toLowerCase())
    .reduce(
      (acc, v, idx, arr) =>
        (acc +=
          ["a", "e", "i", "o", "u"].includes(v) ||
          (v === "y" &&
            idx > 0 &&
            !["a", "e", "i", "o", "u"].includes(arr[idx - 1])) ||
          (v === "y" && idx === 0)
            ? 1
            : 0),
      0,
    );
}

function sortNames(arr) {
  return arr.toSorted((a, b) => {
    return (
      numberVowels(b) - numberVowels(a) ||
      a.toLowerCase().localeCompare(b.toLowerCase())
    );
  });
}

console.log(sortNames(["Goku", "Vegeta", "Piccolo", "Gohan"]));
console.log(sortNames(["Edward", "Alphonse", "Roy", "Winry"]));
