/*
You're building a pizza ordering system that enforces strict ingredient layering rules. Given an array of pizza layers (bottom to top) and a set of rules where each rule states that ingredient A must appear somewhere below ingredient B, write a function that determines whether the pizza is valid. If any rule is violated, return the pair [A, B] that was violated first (in the order the rules are given). If the pizza is valid, return true.

Examples:

const layers = ["dough", "sauce", "cheese", "pepperoni", "basil"];
const rules = [
  ["sauce", "cheese"],
  ["cheese", "pepperoni"],
  ["dough", "basil"],
];
const rules2 = [
  ["cheese", "pepperoni"],
  ["cheese", "sauce"], // "it's under the sauce"
];

validatePizza(layers, rules);
> true

validatePizza(layers, rules2);
> ['cheese', 'sauce']
*/

const layers = ["dough", "sauce", "cheese", "pepperoni", "basil"];
const rules = [
  ["sauce", "cheese"],
  ["cheese", "pepperoni"],
  ["dough", "basil"],
];
const rules2 = [
  ["cheese", "pepperoni"],
  ["cheese", "sauce"],
];

function validatePizza(layers, rules) {
  return rules.reduce((acc, [e1, e2]) => {
    const idx1 = layers.indexOf(e1);
    const idx2 = layers.indexOf(e2);
    return acc && ((idx1 === -1 && idx2 === -1) || idx1 < idx2);
  }, true);
}

console.log(validatePizza(layers, rules));
console.log(validatePizza(layers, rules2));
