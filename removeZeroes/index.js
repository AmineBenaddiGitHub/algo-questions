function removeZeroes(arr) {
  let ptr1 = -1,
    ptr2 = arr.length;
  for (let i = 0; i < arr.length; i++) {
    ptr1 = i;
    if (arr[i] !== 0) {
      break;
    }
  }
  for (let i = arr.length - 1; i > -1; i--) {
    if (arr[i] === 0) {
      ptr2 = i;
    } else {
      break;
    }
  }
  return arr.slice(ptr1, ptr2);
}

console.log(removeZeroes([0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0]));
console.log(removeZeroes([0, 0, 0, 0, 0, 0, 0]));
console.log(removeZeroes([8]));
