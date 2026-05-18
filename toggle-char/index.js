/*
Given a string s consisting of letters, convert each character to its opposite case that is,
change every lowercase letter to uppercase, and every uppercase letter to lowercase.
Bonus: add an "alternate" parameter that converts the whole string to AlTeRnAtE cAsE!

Examples:

let alternating = true

toggleChar("Hello, world!")
> "hELLO, WORLD!"

toggleChar("HeheHeheHEheheHeH")
> "hEHEhEHEheHEHEhEh"

toggleChar("This will be alternated", alternating)
> "ThIs WiLl Be AlTeRnAtEd"
*/

function isAlpha(char) {
  return /^[a-zA-Z]$/.test(char);
}

function toggleChar(str, alternate = false) {
  return str.split("").reduce(
    (acc, e) => ({
      res:
        acc.res +
        (alternate
          ? isAlpha(e) && acc.last === "lower"
            ? e.toUpperCase()
            : isAlpha(e) && acc.last === "upper"
              ? e.toLowerCase()
              : e
          : e === e.toLowerCase()
            ? e.toUpperCase()
            : e.toLowerCase()),
      last:
        isAlpha(e) && acc.last === "lower"
          ? "upper"
          : isAlpha(e) && acc.last === "upper"
            ? "lower"
            : acc.last,
    }),
    { res: "", last: "lower" },
  ).res;
}

console.log(toggleChar("HeheHeheHEheheHeH") === "hEHEhEHEheHEHEhEh");
console.log(
  toggleChar("This will be alternated", true) === "ThIs WiLl Be AlTeRnAtEd",
);
