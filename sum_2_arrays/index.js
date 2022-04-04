// https://leetcode.com/problems/two-sum/submissions/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let sptr = 0;
  let bptr = nums.length - 1;
  const snums = [...nums].sort((a, b) => a - b);
  while (snums[sptr] + snums[bptr] !== target) {
    if (snums[sptr] + snums[bptr] > target) bptr--;
    if (snums[sptr] + snums[bptr] < target) sptr++;
  }
  if (snums[sptr] !== snums[bptr])
    return [
      nums.findIndex((e) => e === snums[sptr]),
      nums.findIndex((e) => e === snums[bptr]),
    ];
  const arr = [];
  nums.forEach((v, i) => {
    if (v === snums[sptr]) arr.push(i);
  });
  return arr;
};

console.log(twoSum([2, 7, 11, 15], 9));
