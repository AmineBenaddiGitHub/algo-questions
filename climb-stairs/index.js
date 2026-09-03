/*
Given an integer n representing the number of steps in a staircase,
return the number of distinct ways you can reach the top if you can climb
either 1 or 2 steps at a time.

Example:

climbStairs(2)
> 2

climbStairs(4)
> 5

climbStairs(10)
> 89
*/

function climbStairs(n, ptr = { ctr: 0 }) {
  if (n < 0) return;
  if (n === 1) {
    ptr.ctr += 1;
    return ptr.ctr;
  }
  if (n === 2) {
    ptr.ctr += 2;
    return ptr.ctr;
  }
  climbStairs(n - 1, ptr);
  climbStairs(n - 2, ptr);
  return ptr.ctr;
}

console.log(climbStairs(2));
console.log(climbStairs(4));
console.log(climbStairs(10));
