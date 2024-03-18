function hillsValleys(arr) {
  while (arr[0] === arr[1]) {
    arr.shift();
  }
  if (arr.length < 3)
    return {
      hills: 0,
      valleys: 0,
    };
  const result = {
    hills: 0,
    valleys: 0,
  };
  let sign = arr[1] - arr[0] >= 0 ? "+" : "-";
  for (let i = 2; i < arr.length; i++) {
    let diff =
      arr[i] - arr[i - 1] > 0 ? "+" : arr[i] - arr[i - 1] < 0 ? "-" : "";
    if (diff !== "" && sign !== diff) {
      if (sign === "+" && diff === "-") {
        result.hills++;
      } else {
        result.valleys++;
      }
      sign = diff;
    }
  }
  return result;
}

console.log(hillsValleys([1, 2, 1]));
console.log(hillsValleys([1, 0, 1]));
console.log(hillsValleys([7, 6, 5, 5, 4, 1]));
console.log(hillsValleys([3, 4, 1, 1, 6, 5]));
console.log(hillsValleys([0, 0, 0, 0, 1, 2, 3]));
console.log(hillsValleys([0, 0, 0, 0, 1, 0, 3]));
