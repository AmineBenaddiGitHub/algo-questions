const findIntersection = (arr1, arr2) => {
  let res = null;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        res = [i, j];
        break;
      }
    }
    if (res) break;
  }
  return res;
};


const listA = [1, 4, 5, 6];
const listB = [2, 3, 4, 5, 6];

console.log(findIntersection(listA, listB));

const listC = [1, 2, 3, 9];
const listD = [4, 5, 6, 7, 8, 9];

console.log(findIntersection(listC, listD));

const listE = [1, 3, 5, 7];
const listF = [2, 4, 6, 8];

console.log(findIntersection(listE, listF));
