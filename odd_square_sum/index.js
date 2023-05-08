function oddSquareSum(n) {
  const limit = (Math.sqrt(n) - 1) / 2;
  let res = 0;
  for (let i = 0; i < limit; i++) {
    res += Math.pow(2 * i + 1, 2);
  }
  return res;
}

console.log(oddSquareSum(1));
console.log(oddSquareSum(2));
console.log(oddSquareSum(9));
console.log(oddSquareSum(10));
console.log(oddSquareSum(44));
