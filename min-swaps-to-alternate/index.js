/*
Given a string s consisting only of 'a' and 'b', you may swap adjacent characters any number of times.
Return the minimum number of adjacent swaps needed to transform s into an alternating string,
either "ababab..." or "bababa...", or return -1 if it's impossible.

Example:

minSwapsToAlternate('aabb')
1

minSwapsToAlternate('aaab')
-1

minSwapsToAlternate('aaaabbbb')
6
*/

function arrayAlternator(arr, ref = { counter: 0 }) {
  const firstChar = arr.at(0);
  const indexB = arr.indexOf(firstChar === "a" ? "b" : "a");
  if (indexB === -1) return { arr, ref };
  if (indexB > 1) {
    arr[1] = arr[indexB];
    arr[indexB] = arr[0];
    ref.counter += indexB - 1;
  }
  return {
    arr: [arr.at(0), arr.at(1), ...arrayAlternator(arr.slice(2)).arr],
    ref: {
      counter: arrayAlternator(arr.slice(2)).ref.counter + ref.counter,
    },
  };
}

function minSwapsToAlternate(str) {
  const { arr, ref } = arrayAlternator(str.split(""));
  const isAlternate = arr.reduce(
    (acc, v, idx) => acc && (idx === 0 || (idx > 0 && v !== arr.at(idx - 1))),
  );
  return isAlternate ? ref.counter : -1;
}

console.log(minSwapsToAlternate("aabb"));
console.log(minSwapsToAlternate("aaab"));
console.log(minSwapsToAlternate("aaaabbbb"));
console.log(minSwapsToAlternate("bbbbaaaa"));
console.log(minSwapsToAlternate("babbaab"));
