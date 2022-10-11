/*
Write a function that truncates words in a string to length n.

Example:

let n = 3

> truncate('never gonna give you up', n)
> 'nev gon giv you up'

> truncate('*hello* darkness, my ~old_friend', n)
> '*hel* dar, my ~old_fri'
*/

function truncate(s, n) {
  let arr = s.split(""),
    acc = 0;
  for (let i = 0; i < arr.length; i++) {
    if (/^[0-9a-zA-Z]+$/.test(arr[i])) {
      acc++;
      if (acc > n) {
        arr[i] = "";
      }
    } else {
      acc = 0;
    }
  }
  return arr.join("");
}

const n = 3;

console.log(truncate("never gonna give you up", n));
console.log(truncate("*hello* darkness, my ~old_friend", n));
