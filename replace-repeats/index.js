/*
Given a string that contains only digits from 0 to 9 and a number n,
replace each consecutive run of n with its length.

Examples:

> replaceRepeats('1234500362000440', 0)
> 1234523623441

> replaceRepeats('000000000000', 0)
> 12

> replaceRepeats('123456789', 1)
> 123456789
*/

function replaceRepeats(str, n) {
  const sentence = str.split("").reduce(
    (acc, v) => {
      if (parseInt(v) === n) acc.ctr++;
      else {
        acc.res += (acc.ctr ? acc.ctr.toString() : "") + v;
        acc.ctr = 0;
      }
      return acc;
    },
    {
      res: "",
      ctr: 0,
    }
  );
  return sentence.res + (sentence.ctr ? sentence.ctr.toString() : "");
}

console.log(replaceRepeats("1234500362000440", 0));
console.log(replaceRepeats("000000000000", 0));
console.log(replaceRepeats("123456789", 1));
console.log(replaceRepeats("111123456789", 1));
