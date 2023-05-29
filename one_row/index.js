const keyBoard = {
  q: 1,
  w: 1,
  e: 1,
  r: 1,
  t: 1,
  y: 1,
  u: 1,
  i: 1,
  o: 1,
  p: 1,
  a: 2,
  s: 2,
  d: 2,
  f: 2,
  g: 2,
  h: 2,
  j: 2,
  k: 2,
  l: 2,
  z: 3,
  x: 3,
  c: 3,
  v: 3,
  b: 3,
  n: 3,
  m: 3,
};

/**
 * this function checks if a string can be written with 1 line of keyboard
 * @param {string} s - string to be checked
 * @returns {boolean} - checker result
 */
function oneRowChecker(s) {
  const arr = s.toLowerCase().split("");
  return arr.reduce(
    (acc, val, idx) =>
      acc && (idx === 0 || keyBoard[val] === keyBoard[arr[idx - 1]]),
    true
  );
}

/**
 * this function filters the array list given as param
 * @param {string[]} arrStr - array of strings to be checked
 * @returns {string[]} - filtered array
 */
function oneRow(arrStr) {
  return arrStr.filter(oneRowChecker);
}

console.log(oneRow(["candy", "fart", "pop", "Zelda", "flag", "typewriter"]));
