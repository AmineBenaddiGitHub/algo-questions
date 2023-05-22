const LanguageToolApi = require("language-grammar-api");
const options = {
  endpoint: "https://languagetool.org/api/v2",
  language: "en-US",
};

const languageToolClient = new LanguageToolApi(options);

const char2point = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
};

async function puzzleScore(str, checkValidity) {
  const check = checkValidity
    ? (
        await languageToolClient.check({
          text: str,
          language: "en-US",
        })
      )?.matches?.length === 0
    : 1;
  return (
    check *
    str
      .toLowerCase()
      .split("")
      .reduce((acc, val) => acc + char2point[val], 0)
  );
}

puzzleScore("FIZZBUZZ", true).then((res) => console.log("FIZZBUZZ", true, res));
puzzleScore("FIZZBUZZ", false).then((res) =>
  console.log("FIZZBUZZ", false, res)
);
puzzleScore("apple", true).then((res) => console.log("apple", true, res));
puzzleScore("apple", false).then((res) => console.log("apple", false, res));
