const antidivisor = (n) =>
  Array.from({ length: n }, (_, idx) =>
    (idx > 1 && idx % 2 === 0 && (n - idx / 2) % idx === 0) ||
    (idx > 1 &&
      idx % 2 === 1 &&
      ((n - (idx - 1) / 2) % idx === 0 || (n - (idx + 1) / 2) % idx === 0))
      ? idx
      : 0
  ).filter((e) => e !== 0);

console.log(antidivisor(1));
console.log(antidivisor(3));
console.log(antidivisor(5));
console.log(antidivisor(10));
console.log(antidivisor(234));
