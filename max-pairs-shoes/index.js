/*
You are given an array of strings representing a collection of shoes.
Each shoe is labeled with its type ("L" for left or "R" for right) and its size.
Determine the maximum number of matching pairs of shoes that can be formed.
*/

function maxPairs(arr) {
  return arr.reduce((acc, elm, idx) => {
    const [shoe, size] = elm.split("-");
    const otherPair = `${shoe === "L" ? "R" : "L"}-${size}`;
    const idxPair = arr.slice(idx).indexOf(otherPair);
    const idxOtherPair = idx + idxPair;
    if (
      idxPair >= 0 &&
      !acc.some(
        (e) =>
          e[0] === idx ||
          e[0] === idxOtherPair ||
          e[1] === idx ||
          e[1] === idxOtherPair
      )
    ) {
      acc.push([idx, idxOtherPair]);
      return acc;
    }
    return acc;
  }, []).length;
}

console.log(maxPairs(["L-10", "R-10", "L-11", "R-10", "L-10", "R-11"]));
console.log(maxPairs(["L-10", "L-11", "L-12", "L-13"]));
console.log(maxPairs(["L-8", "L-8", "L-8", "R-8"]));
