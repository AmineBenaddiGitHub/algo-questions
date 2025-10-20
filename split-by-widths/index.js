/*
Given a string str and an array of positive integers widths,
write a function that splits the string into lines,
each with the exact number of characters as specified by the corresponding width.
Return an array of the substrings.
Use the last width for any remaining characters if the array is shorter than needed.

Example:

const str = "Supercalifragilisticexpialidocious";
const widths = [5, 9, 4];

> splitByWidths(str, widths);
> ['Super', 'califragi', 'list', 'icex', 'pial', 'idoc', 'ious']
*/

function splitByWidths(str, widths) {
  const firstSplit = widths
    .reduce((acc, v) => {
      const lastVal = acc.at(-1);
      acc.push({
        part: lastVal ? lastVal.remaining.substring(0, v) : str.substring(0, v),
        remaining: lastVal ? lastVal.remaining.substring(v) : str.substring(v),
      });
      return acc;
    }, [])
    .map((e) => e);
  let remainingStr = firstSplit.at(-1)?.remaining ?? "";
  const lastWidth = widths.at(-1) ?? 0;
  const lastSplit = remainingStr
    .split("")
    .reduce(
      (acc, v) => {
        if (acc.at(-1) && acc.at(-1).length < lastWidth) acc.at(-1).push(v);
        else acc.push([v]);
        return acc;
      },
      [[]]
    )
    .map((e) => e.join(""));

  return [firstSplit.map((e) => e.part), lastSplit].flat();
}

console.log(splitByWidths("Supercalifragilisticexpialidocious", [5, 9, 4]));
console.log(splitByWidths("Supercalifragilisticexpialidocious", [5, 9, 5]));
console.log(splitByWidths("Supercalifragilisticexpialidocious", [5, 9, 9]));
console.log(splitByWidths("Supercalifragilisticexpialidocious", [4]));
