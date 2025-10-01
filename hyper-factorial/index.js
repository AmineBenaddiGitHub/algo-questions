/*
Given the non-negative integer n, output the value of its hyperfactorial.
Don't worry about outputs exceeding your language's integer limit.

Examples:

> hyperfactorial(0)
> 1

> hyperfactorial(2)
> 4
> 
> hyperfactorial(3)
> 108

> hyperfactorial(7)
> 3319766398771200000
*/

function hyperfactorial(n) {
  if (n === 0) return 1n;
  let res = 1n;
  for (let i = 1n; i < BigInt(n) + 1n; i += 1n) {
    res *= i ** i;
  }
  return res;
}

console.log(hyperfactorial(0));
// 1n
console.log(hyperfactorial(2));
// 4n
console.log(hyperfactorial(3));
// 108n
console.log(hyperfactorial(7));
// 3319766398771200000n
console.log(hyperfactorial(23));
// 4197093705250604710275347104964081243221982781579618580462605439116083584055884470274077992554250848039529417827174171157030796866104670932094466357584389349846999198862657439901581158947968130259243610332094771316158830668308892957375850160953991842859293421399021977600000000000000000000000000000000000000000000000000n
