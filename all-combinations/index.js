function allSubsets(arr, branch = [], results = []) {
  if (arr.length === 0) {
    results.push(branch);
  }
  if (arr.length > 0) {
    const newArr = arr.slice(1);
    allSubsets(newArr, [...branch], results);
    allSubsets(newArr, [arr[0], ...branch], results);
  }
  return results;
}

function allPermutations(
  arr,
  branch = Array.from({ length: arr.length }, () => undefined),
  results = []
) {
  if (arr.length === 0) {
    results.push(branch);
  }
  if (arr.length > 0) {
    branch.forEach((e, idx, b_arr) => {
      if (!e) {
        const newCombination = [...b_arr];
        newCombination[idx] = arr[0];
        allPermutations(arr.slice(1), newCombination, results);
      }
    });
  }
  return results;
}

function letters(arr) {
  return [
    ...new Set(
      allSubsets(arr)
        .map((e) => allPermutations(e).map((p) => p.join("")))
        .flat()
        .filter((e) => !!e)
    ),
  ];
}

console.log(letters(["A", "A", "B"]));
console.log(letters(["A", "A", "A", "B"]));
console.log(letters(["A", "B", "C", "D"]));
console.log(letters(["X"]));
