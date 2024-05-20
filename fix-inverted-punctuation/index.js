/*
The Spanish language uses inverted punctuation marks (¿ and ¡) in interrogative and exclamatory sentences.
Write a function that takes in a string str, and adds ¿ and ¡ if they're needed.
*/

function fixInvertedPunctuation(paragraph) {
  return paragraph
    .split(/[.|?|!|:]/)
    .filter((sentence) => sentence.length > 0)
    .map((sentence) => {
      const idx = paragraph.indexOf(sentence);
      const punc = paragraph[idx + sentence.length];
      return ["?", "!"].includes(punc) &&
        ((idx > 0 && !["¿", "¡"].includes(paragraph[idx + 1])) ||
          (idx === 0 && !["¿", "¡"].includes(paragraph[idx])))
        ? (idx === 0 ? "" : " ") +
            (punc === "?" ? "¿" : "¡") +
            sentence.slice(idx === 0 ? 0 : 1, sentence.length) +
            punc
        : sentence + punc;
    })
    .join("");
}

console.log(fixInvertedPunc("Feliz cumpleaños!"));
console.log(fixInvertedPunc("¡Feliz cumpleaños!"));
console.log(fixInvertedPunc("Ella ya se graduó de la universidad?"));
console.log(fixInvertedPunc("¿Ella ya se graduó de la universidad?"));
console.log(fixInvertedPunc("Ella ya se graduó de la universidad? No!"));
console.log(fixInvertedPunc("¿Ella ya se graduó de la universidad? ¡No!"));
console.log(fixInvertedPunc("¿Ella ya se graduó de la universidad? ¡No!"));
