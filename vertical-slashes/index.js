/**
 Write a function that takes a string of slashes (\ and /)
 and returns all of those slashes drawn downwards in a line
 connecting them.
*/

const verticalSlashes = (str) => {
  const res = [];
  let spaces = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "\\") {
      res.push(" ".repeat(spaces) + char);
      spaces++;
    } else {
      spaces--;
      res.push(" ".repeat(spaces) + char);
    }
  }
  return res.join("\n");
};

console.log(verticalSlashes("\\\\\\//\\/\\\\"));
console.log(verticalSlashes("\\\\\\\\"));
