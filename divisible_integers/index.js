// permutations function taken from stackoverflow ...
// didn't find any better solution for 7
const permutations = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};

function divisibleIntegers(n, arr) {
  if (n === 1) return true;
  const numbers = arr
    .map((e) =>
      e
        .toString()
        .split("")
        .map((e) => Number(e))
    )
    .reduce((acc, val) => [...acc, ...val], []);
  // last digit divisible by 2
  if (
    n === 2 &&
    numbers.some((e) => e === 0 || e === 2 || e === 4 || e === 6 || e === 8)
  )
    return true;
  // sum of elements divisible by 3
  if (n === 3 && numbers.reduce((acc, val) => acc + val, 0) % 3 === 0)
    return true;
  if (n === 4) {
    // last 2 digits divisible by 4
    for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (
          (numbers[i] * 10 + numbers[j]) % 4 === 0 ||
          (numbers[j] * 10 + numbers[i]) % 4 === 0
        ) {
          return true;
        }
      }
    }
  }
  // last digit equal to 0 or 5
  if (n === 5 && numbers.some((e) => e === 0 || e === 5)) return true;
  // divisible by 2 and 3
  if (
    n === 6 &&
    numbers.some((e) => e === 0 || e === 2 || e === 4 || e === 6 || e === 8) &&
    numbers.reduce((acc, val) => acc + val, 0) % 3 === 0
  )
    return true;
  // not elegant ...
  if (n === 7) {
    const perms = permutations(numbers);
    for (let p = 0; p < perms.length; p++) {
      const n = perms[p].reduce((acc, v, i) => acc + v * Math.pow(10, i));
      if (n % 7 === 0) return true;
    }
  }
  if (n === 8) {
    // last 3 digits divisible by 8
    for (let i = 0; i < numbers.length - 2; i++) {
      for (let j = i + 1; j < numbers.length - 1; j++) {
        for (let k = j + 1; k < numbers.length; k++) {
          if (
            (numbers[i] * 100 + numbers[j] * 10 + numbers[k]) % 8 === 0 ||
            (numbers[i] * 100 + numbers[k] * 10 + numbers[j]) % 8 === 0 ||
            (numbers[k] * 100 + numbers[i] * 10 + numbers[j]) % 8 === 0 ||
            (numbers[k] * 100 + numbers[j] * 10 + numbers[i]) % 8 === 0 ||
            (numbers[j] * 100 + numbers[i] * 10 + numbers[k]) % 8 === 0 ||
            (numbers[j] * 100 + numbers[k] * 10 + numbers[i]) % 8 === 0
          ) {
            return true;
          }
        }
      }
    }
    return false;
  }
  // sum of elements divisible by 9
  if (n === 9 && numbers.reduce((acc, val) => acc + val, 0) % 9 === 0) {
    return true;
  }
  return false;
}

console.log(divisibleIntegers(2, [40, 50, 90]));
console.log(divisibleIntegers(3, [40, 50, 90]));
console.log(divisibleIntegers(4, [40, 50, 90]));
console.log(divisibleIntegers(5, [40, 50, 90]));
console.log(divisibleIntegers(6, [40, 50, 90]));
console.log(divisibleIntegers(7, [6, 4, 9, 3, 3]));
console.log(divisibleIntegers(8, [33, 64, 9]));
console.log(divisibleIntegers(9, [40, 50, 90]));
