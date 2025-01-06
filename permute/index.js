/*
Write a function that generates all possible permutations of a given string.
*/
function permute(
  str,
  path = Array.from({ length: str.length }, () => undefined),
  res = []
) {
  if (!path.some((e) => e === undefined)) res.push(path);
  else
    path.forEach((_, idx) => {
      const copyPath = structuredClone(path);
      if (copyPath[idx] === undefined) {
        copyPath[idx] = str[0];
        permute(str.slice(1), copyPath, res);
      }
    });

  return res;
}

console.log(permute("abcde"));
