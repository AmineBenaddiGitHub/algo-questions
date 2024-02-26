/*

Given a number and a digit to remove from that number, maximize the resulting number after the digit has been removed and print it.
You can choose how you want to handle a digit not existing in the number.

Example:

> removeDigit(31415926, 1)
> 3415926 // we picked the second 1 in the number.

> removeDigit(1231, 1)
> 231 // 231 > 123

*/

function removeDigit(n, d) {
  let res = 0,
    s = String(n);
  for (let i = 0; i < s.length; i++) {
    if (parseInt(s[i]) === d) {
      const tmp = parseInt(s.substring(0, i) + s.substring(i + 1));
      if (tmp > res) {
        res = tmp;
      }
    }
  }
  return res;
}

console.log(removeDigit(31415926, 1) === 3415926);
console.log(removeDigit(1231, 1) === 231);
