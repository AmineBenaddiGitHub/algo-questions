/*
You're trick-or-treating down a street, and you're given an array that shows
how many pieces of candy each house gives out.
You can't visit two houses that are next to each other.
Return the maximum number of candy pieces you can collect.

Example:

> maxCandy([2, 7, 9, 3, 1])
> 12 // visit houses with 2, 9, and 1
> 
> maxCandy([5, 1, 1, 5])
> 10 // it's worth it to skip the middle two
> 
> maxCandy([4])
> 4
*/

function maxCandy(arr, path = [], res = []) {
  if (arr.length === 0) {
    res.push(path);
    return;
  }
  maxCandy(arr.slice(2), [...path, arr[0]], res);
  maxCandy(arr.slice(1), [...path], res);
  return Math.max(...res.map((e) => e.reduce((acc, v) => acc + v, 0)));
}

console.log(maxCandy([2, 7, 9, 3, 1]));
console.log(maxCandy([5, 1, 1, 5]));
console.log(maxCandy([4]));
