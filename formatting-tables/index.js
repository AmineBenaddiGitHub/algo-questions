const formateTable = (table) => {
  let tableMatrix = table
    .split("\n")
    .filter((e) => e !== "")
    .map((e) => e.split("|").slice(1));
  const maxCols = [];
  for (let j = 0; j < tableMatrix[0].length; j++) {
    maxCols.push(Math.max(...tableMatrix.map((e) => e[j].length)));
  }
  tableMatrix = tableMatrix.map((e, i) =>
    e.map((v, j) => {
      if (i === 1 && j !== e.length - 1)
        return " " + "-".repeat(maxCols[j] - 2) + " ";
      return v.padEnd(maxCols[j], " ");
    })
  );
  return tableMatrix
    .map((e) => e.reduce((acc, v) => acc + "|" + v, ""))
    .reduce((acc, e) => acc + "\n" + e);
};

const table1 = `
| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |
`;

console.log(formateTable(table1));

const table2 = `
| Syntax | Description | Length |
| --- | ----------- |  |
| Header | Title | 20 |
| Paragraph | Text | 3000 |
`;

console.log(formateTable(table2));
