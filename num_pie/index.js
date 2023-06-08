function numPie(arr, pieces) {
  const parts = arr.reduce((acc, val) => acc + val.num, 0);
  return Math.ceil(parts / pieces);
}

console.log(
  numPie(
    [
      { name: "Joe", num: 9 },
      { name: "Cami", num: 3 },
      { name: "Cassidy", num: 4 },
    ],
    8
  )
);
