/*
Given an array of objects representing bears in a forest,
each with a name and hunger level, return the names of all
bears whose hunger level is above the forest average, sorted
alphabetically.
In how few lines can you do this one?

Example:

const bears = [
  { name: 'Baloo', hunger: 6 },
  { name: 'Yogi', hunger: 9 },
  { name: 'Paddington', hunger: 4 },
  { name: 'Winnie', hunger: 10 },
  { name: 'Chicago', hunger: 20 },
];

hungryBears(bears)
> ['Chicago', 'Winnie']
*/

function hungryBears(bears) {
  const mean = bears.reduce((acc, e) => acc + e.hunger / bears.length, 0);
  return bears
    .filter((e) => e.hunger >= mean)
    .map((e) => e.name)
    .toSorted();
}

console.log(
  hungryBears([
    { name: "Baloo", hunger: 6 },
    { name: "Yogi", hunger: 9 },
    { name: "Paddington", hunger: 4 },
    { name: "Winnie", hunger: 10 },
    { name: "Chicago", hunger: 20 },
  ])
);

console.log(hungryBears([]));
