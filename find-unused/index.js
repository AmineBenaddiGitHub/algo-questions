/*
Given an array of logs and variable assignments, return a list of all unused variables.
*/

function findUnused(arr) {
  const vars = arr.filter((e) => e.includes("=")).map((e) => e.split(" = ")[0]);
  const rhs_exp = arr.map((e) =>
    e.includes("=")
      ? e.split(" = ")[1]
      : e.includes("log")
      ? e.match(/\((.*?)\)/)[1]
      : e
  );
  return vars.filter((v) => !rhs_exp.some((r) => r.includes(v)));
}

console.log(findUnused(["a = 1", "b = a", "c = 2", "log(b)"]));
console.log(findUnused(["a = 1", "b = a", "c = 2", "log(c)"]));
console.log(findUnused(["a = 1", "b = a", "c = 2"]));
console.log(findUnused(["a = 1", "b = a", "c = 2", "log(c + b)"]));
console.log(findUnused(["a = 1", "b = a", "c = 2", "log(c + b + a)"]));
