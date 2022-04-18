const largestSubarraySum = (arr, len) => {
  let resa = [];
  let resl = 0;
  arr.forEach((_, idx) => {
    if (idx < arr.length - len + 1) {
      const subArr = arr.slice(idx, idx + len);
      const subLen = subArr.reduce((val, acc) => val + acc, 0);
      if (subLen > resl) {
        resa = subArr;
        resl = subLen;
      }
    }
  });
  return resa;
};

console.log(largestSubarraySum([3, 1, 4, 1, 5, 9, 2, 6], 3));
