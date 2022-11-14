/**
Given a list of strings arr, and a max size n, return a new list where the strings (from left to right)
are joined together with a space, so that each new string is less than or equal to the max size.

Examples:

> combineStrings(["a", "b", "c", "d", "e", "f", "g"], 5)
> ["a b c", "d e f", "g"]

> combineStrings(["a", "b", "c", "d", "e", "f", "g"], 12)
> ["a b c d e f", "g"]

> combineStrings(["alpha", "beta", "gamma", "delta", "epsilon"], 20)
> ["alpha beta gamma", "delta epsilon"]
*/

function combineStrings(arr, len) {
  let stringBuffer = "";
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (stringBuffer === "" && arr[i].length <= len) {
      stringBuffer = arr[i];
    } else if (
      stringBuffer !== "" &&
      stringBuffer.length + arr[i].length + 1 <= len
    ) {
      stringBuffer += " " + arr[i];
    } else if (
      stringBuffer !== "" &&
      stringBuffer.length + arr[i].length + 1 > len
    ) {
      res.push(stringBuffer);
      stringBuffer = "";
      i--;
    }
  }
  res.push(stringBuffer);
  return res;
}

console.log(combineStrings(["a", "b", "c", "d", "e", "f", "g"], 5));
console.log(combineStrings(["a", "b", "c", "d", "e", "f", "g"], 12));
console.log(combineStrings(["alpha", "beta", "gamma", "delta", "epsilon"], 20));
