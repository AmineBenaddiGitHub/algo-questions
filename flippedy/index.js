/*
You are given a string consisting of lowercase words, each separated by a single space. Determine how many vowels appear in the first word. Then, reverse each following word that has the same vowel count.

Examples:

flippedy("cat and mice")
> "cat dna mice"

flippedy("banana healthy")
> "banana healthy"
*/

const VOWELS = ["a", "e", "i", "o", "u"];

function isYNotVowel(word, i) {
  const w = word.toLowerCase();
  const next = w[i + 1] || "";
  const prev = w[i - 1] || "";
  return w[i] === "y" && isVowel(next) && (i === 0 || !/[a-z]/.test(prev));
}

function vowelsCount(str) {
  return str
    ?.split("")
    .reduce(
      (acc, e, i) => acc + (VOWELS.includes(e) || !isYNotVowel(e, i) ? 1 : 0),
      0,
    );
}

function flippedy(str) {
  const words = str.split(" ");
  const firstCount = vowelsCount(words?.[0] ?? "");
  return words
    .map((e, i) =>
      i && firstCount === vowelsCount(e)
        ? e.split("").toReversed().join("")
        : e,
    )
    .join(" ");
}

console.log(flippedy("cat and mice"));
console.log(flippedy("banana healthy"));
