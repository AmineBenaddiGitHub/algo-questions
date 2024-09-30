/*
Implement your own String split() function in your preferred programming language.
*/

function split2(str, delimiter) {
  let ptr = 0,
    res = [];
  for (let cpt = 0; cpt < str.length; cpt++) {
    if (str.substring(cpt, cpt + delimiter.length) === delimiter) {
      res.push(str.substring(ptr, cpt));
      ptr = cpt;
    }
  }
  if (ptr !== 0) {
    res.push(str.substring(ptr));
  }
  return res;
}

String.prototype.split2 = function (delimiter) {
  let ptr = 0,
    res = [];
  for (let cpt = 0; cpt < this.length; cpt++) {
    if (this.substring(cpt, cpt + delimiter.length) === delimiter) {
      const subStringToAdd = this.substring(ptr, cpt);
      if (subStringToAdd.length > 0) {
        res.push(this.substring(ptr, cpt));
      }
      ptr = cpt + delimiter.length;
    }
  }
  if (ptr !== 0) {
    res.push(this.substring(ptr));
  }
  return res;
};

console.log("This is so, so silly!".split2(" "));
console.log("This is so, so silly!".split2(","));
console.log("This is so, so silly!".split2(", "));
console.log("This is so, so silly!".split2(""));
