const fibLike = (u0, u1, n) => {
  if (n < 1) return [];
  if (n === 1) return [u0];
  if (n === 2) return [u0, u1];
  const res = [u0, u1];
  while (n > 2) {
    res.push(res.at(-1) + res.at(-2));
    n--;
  }
  return res;
};

console.log(fibLike(10, 20, 5));
console.log(fibLike(3, 7, 5));

const isFibLike = (arr) => {
  if (arr.length < 3) return true;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + arr[i - 2]) return false;
  }
  return true;
};

console.log(isFibLike([10, 20, 30, 50, 80]));
console.log(isFibLike([3, 7, 10, 17, 27]));
console.log(isFibLike([3, 7, 10, 17, 30]));
