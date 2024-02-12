/*
Write a function that produces a generator that produces values in a range.
*/

let fromTo = (start, end) => {
  let ptr = start;
  return () => (ptr < end ? ptr++ : null);
};

let range = fromTo(0, 3);
console.log(range());
console.log(range());
console.log(range());
console.log(range());
console.log(range());
console.log(range());
console.log(range());
console.log(range());
console.log(range());
console.log(range());

fromTo = (start, end) => {
  let ptr = start;
  const gen = function* () {
    while (ptr < end) {
      yield ptr++;
    }
  };
  return () => gen().next().value ?? null;
};

range = fromTo(0, 3);
console.log(range());
console.log(range());
console.log(range());
console.log(range());
console.log(range());
console.log(range());
console.log(range());
console.log(range());
console.log(range());
console.log(range());
