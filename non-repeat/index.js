/*
Find the last non-repeating character in a given string. If all characters repeat, return an empty string.

Example:
> nonRepeat('candy canes do taste yummy')
> 'u'

*/

function nonRepeat(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    const firstIndex = str.indexOf(str[i]);
    const lastIndex = str.lastIndexOf(str[i]);
    if (firstIndex === lastIndex) return str[i];
  }
  return "";
}

console.log(nonRepeat("candy canes do taste yummy"));
