function binaryPal(n) {
  const bin = n.toString(2);
  const len = bin.length;
  // Not efficient but fully functional
  return bin
    .split("")
    .reduce(
      (acc, val, idx) =>
        idx < Math.round(len / 2) ? acc && val === bin[len - idx - 1] : acc,
      true
    );
}

console.log(binaryPal(5));
console.log(binaryPal(7));
console.log(binaryPal(15));
console.log(binaryPal(10));
