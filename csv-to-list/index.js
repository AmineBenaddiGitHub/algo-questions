/*
const csv = 'name,age,city\n"Ryu, Mi-yeong",30,"Seoul"\nZoey,24,"Burbank"'

csvToList(csv)
> `
- Ryu, Mi-yeong, age 30, from Seoul
- Zoey, age 24, from Burbank
`
*/

function csvToList(csv) {
  let isStr = false;
  const formattedCsv = csv
    .split("")
    .map((e) => {
      if (e === '"') isStr = !isStr;
      return e === "," && !isStr ? ";" : e;
    })
    .join("");
  const [_, ...data] = formattedCsv.split("\n");
  return data
    .map((l) =>
      l.split(";").reduce((acc, v, idx) => {
        const formattedStr = v.slice(
          v[0] === '"' ? 1 : 0,
          v[v.length - 1] === '"' ? v.length - 1 : v.length
        );
        acc +=
          idx === 0
            ? `- ${formattedStr}, `
            : idx === 1
            ? `age ${v}, `
            : `from ${formattedStr}.`;
        return acc;
      }, "")
    )
    .reduce((acc, e) => {
      acc += `${e} \n`;
      return acc;
    }, "\n");
}

console.log(
  csvToList('name,age,city\n"Ryu, Mi-yeong",30,"Seoul"\nZoey,24,"Burbank"')
);
