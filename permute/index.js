/*
Write a function that generates all possible permutations of a given string.
*/
function permute(str, path = [], res = []) {
  const combination =
    path.length > 0
      ? path
      : Array.from({ length: str.length }, () => undefined);
  if (!combination.some((e) => e === undefined)) res.push(combination);
  else
    combination.forEach((_, idx) => {
      const copyPath = structuredClone(combination);
      if (copyPath[idx] === undefined) {
        copyPath[idx] = str[0];
        permute(str.slice(1), copyPath, res);
      }
    });

  return res;
}

console.log(permute("abcde"));
