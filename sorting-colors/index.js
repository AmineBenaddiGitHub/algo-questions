/*
There are 16 basic HTML Colors.
Write a program to output them in ascending order by HEX value.
Don't use any built-in sorting methods!

Example output:

000000
000080
0000FF
008000
008080
00FF00
00FFFF
800000
800080
808000
808080
C0C0C0
FF0000
FF00FF
FFFF00
FFFFFF

*/

function sortingColors(colors) {
  return divideAndConquire(colors.map((c) => parseInt(c, 16))).map((e) =>
    e.toString(16).padStart(6, "0")
  );
}

function divideAndConquire(arr) {
  if (arr.length === 2) {
    const [a, b] = arr;
    if (a < b) return [a, b];
    else return [b, a];
  }
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const arr1 = arr.filter((e) => e < pivot);
  const arr2 = arr.filter((e) => e > pivot);
  return [...divideAndConquire(arr1), pivot, ...divideAndConquire(arr2)];
}

console.log(
  sortingColors([
    "00FF00",
    "008000",
    "FFFFFF",
    "008080",
    "800000",
    "000000",
    "00FFFF",
    "808000",
    "FFFF00",
    "0000FF",
    "808080",
    "FF0000",
    "C0C0C0",
    "000080",
    "800080",
    "FF00FF",
  ])
);
