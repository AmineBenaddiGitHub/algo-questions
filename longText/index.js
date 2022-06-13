const longText = (str, nbr) =>
  str
    .split("")
    .map((e) => {
      if (["a", "e", "i", "o", "u"].includes(e.toLowerCase()))
        return Array.from({ length: nbr }, (_) => e);
      else return [e];
    })
    .map((e) => e.join(""))
    .join("");

console.log(longText("hello world", 3));
console.log(longText("lol", 10));
