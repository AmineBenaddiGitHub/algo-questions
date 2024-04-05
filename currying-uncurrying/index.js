/*
Define an uncurring function:

e.g.

const addFour = (a) => (b) => (c) => (d) => a + b + c + d;
const uncurriedAdd = uncurry(addFour);
uncurriedAdd(1, 2, 3, 4); //=> 10

*/

function uncurry(func) {
  return (...arg) => {
    let res = func,
      i = 0;
    while (typeof res === "function") {
      res = res(arg[i]);
      i++;
    }
    return res;
  };
}

const addFourCurry = (a) => (b) => (c) => (d) => a + b + c + d;
const uncurriedAdd = uncurry(addFourCurry);
console.log(uncurriedAdd(1, 2, 3, 4)); // 10

/*
Define a curring function:

e.g.

const addFour = (a, b, c, d) => a + b + c + d;
const curriedAdd = curry(addFour);
curriedAdd(1)(2)(3)(4); //=> 10

*/

function curry(func) {
  const args = [];
  let nbr = func.length;
  const res = (x) => {
    args.push(x);
    nbr--;
    if (nbr === 0) return func(...args);
    else {
      return (y) => res(y);
    }
  };
  return res;
}

const addFourUncurry = (a, b, c, d, e, f, g) => a + b + c + d + e + f + g;
const curriedAdd = curry(addFourUncurry);
console.log(curriedAdd(1)(2)(3)(4)(5)(6)(7));
