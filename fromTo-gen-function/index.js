function fromTo(from, to) {
  let state = from;
  return () => (state <= to ? state++ : undefined);
}

const from = 5,
  to = 20;
const gen = fromTo(5, 20);
Array.from({ length: to - from + 6 }, (_) => {
  console.log(gen());
});
