/*
Given a Fibonacci number, give the previous Fibonacci number.
If the number given is not a Fibonacci number, return -1.
*/

const phi = (1 + Math.sqrt(5)) / 2;

const prevFibonacci = (val) => {
  let n = 1;
  while (Math.floor(Math.pow(phi, n) / Math.sqrt(5) + 0.5) < val) {
    n++;
  }
  if (Math.floor(Math.pow(phi, n) / Math.sqrt(5) + 0.5) === val) {
    return Math.floor(Math.pow(phi, n - 1) / Math.sqrt(5) + 0.5);
  } else {
    return -1;
  }
};

console.log(prevFibonacci(3));
console.log(prevFibonacci(5));
console.log(prevFibonacci(8));
console.log(prevFibonacci(13));
console.log(prevFibonacci(21));
console.log(prevFibonacci(34));
console.log(prevFibonacci(55));
console.log(prevFibonacci(89));
console.log(prevFibonacci(144));
console.log(prevFibonacci(233));
console.log(prevFibonacci(377));
console.log(prevFibonacci(610));
console.log(prevFibonacci(987));
console.log(prevFibonacci(1597));
console.log(prevFibonacci(2584));
console.log(prevFibonacci(4181));
console.log(prevFibonacci(6765));
console.log(prevFibonacci(10946));
console.log(prevFibonacci(17711));
console.log(prevFibonacci(28657));
console.log(prevFibonacci(46368));
console.log(prevFibonacci(75025));
console.log(prevFibonacci(121393));
console.log(prevFibonacci(196418));
console.log(prevFibonacci(317811));
console.log(prevFibonacci(317812));
