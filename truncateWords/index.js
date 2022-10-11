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
