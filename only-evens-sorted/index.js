/*
Write a function that takes an array of integers and returns a new array containing only the even numbers, and sorted.
*/

function onlyEvens(array) {
  return array.filter((elt) => elt % 2 === 0).sort();
}

console.log(onlyEvens([1, 2, 3, 4, 5, 2]));
console.log(onlyEvens([7, 8, 1, 0, 2, 5]));
console.log(onlyEvens([11, 13, 15]));
