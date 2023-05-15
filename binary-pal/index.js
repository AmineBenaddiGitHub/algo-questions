function binaryPal(n) {
  const bin = n.toString(2);
  const len = bin.length;
  return bin
    .split("")
    .slice(0, Math.round(len / 2))
    .reduce((acc, val, idx) => acc && val === bin[len - idx - 1], true);
}

console.log(binaryPal(5));
console.log(binaryPal(7));
console.log(binaryPal(15));
console.log(binaryPal(10));
