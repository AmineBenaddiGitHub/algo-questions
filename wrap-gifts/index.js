/**
Write a function wrapGifts that finds the maximum number of gifts that can be wrapped
using a single strip of wrapping paper of a given width.
Each gift has a specific length, and you can only wrap gifts if their total length fits
within the paper width without cutting the paper.
 */

function wrapGifts(arr, paper, path = [], res = []) {
  if (paper === 0) {
    res.push(path);
  }
  arr.forEach((gift, idx) => {
    if (paper - gift >= 0) {
      const copyPath = structuredClone(path);
      copyPath.push(gift);
      const copyArr = structuredClone(arr);
      copyArr.splice(idx, 1);
      wrapGifts(copyArr, paper - gift, copyPath, res);
    }
  });
  return Math.max(...res.map((e) => e.length));
}

console.log(wrapGifts([2, 3, 4, 5], 7));
console.log(wrapGifts([1, 1, 1, 1, 1, 1, 1], 3));
console.log(wrapGifts([1, 2, 3, 4, 5], 6));
