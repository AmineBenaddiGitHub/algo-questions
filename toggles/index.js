let n = 7;
let numberOfPasses = 3;

const passDoors = (n, numberOfPasses) => {
  let doors = Array.from({ length: n }, () => 1);
  for (let i = 0; i < numberOfPasses; i++) {
    doors = doors.map((e, idx) => (idx % i === 0 ? (e + 1) % 2 : e));
  }
  return doors.reduce((acc, val) => acc + (val === 0 ? 1 : 0));
};

console.log(passDoors(n, numberOfPasses));
