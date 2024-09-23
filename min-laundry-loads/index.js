/*
You're designing a smart laundry sorting system.
You have a list of clothing items, each with a color and a fabric type.
Sort these items into the minimum number of loads n and return n,
where items of the same color can be washed together,
and some different fabric types cannot be mixed together.
"Normal" fabric types can be mixed with "heavy",
but "delicate" cannot be mixed with anything.
*/

function minLaundryLoads(load) {
  return new Set(
    load.map((cloth) => cloth[0] + "-" + (cloth[1] === "delicate" ? "0" : "1"))
  ).size;
}

console.log(
  minLaundryLoads([
    ["red", "normal"],
    ["blue", "normal"],
    ["red", "delicate"],
    ["blue", "heavy"],
  ])
);

console.log(
  minLaundryLoads([
    ["white", "normal"],
    ["white", "delicate"],
    ["white", "normal"],
    ["white", "heavy"],
  ])
);
