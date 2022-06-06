/**
This week’s question:
Given an int array coins and an int amount, return an array of coins that add up to amount
(and an empty array if it’s an impossible combination).

Example:

let coins = [2,3,5,7]
let amount = 17

$ coinCombo(coins, amount)
$ [3,7,7]

$ coinCombo([2,3,5], 11)
$ [3,3,5]
*/

const coinComputations = (coins, amount, results, path = {}) => {
  if (amount === 0) {
    results.push(path);
    return;
  }
  const coin = coins[0];
  coins.shift();
  for (let i = 0; i < Math.floor(amount / coin) + 1; i++) {
    path[coin] = i;
    if (amount - i * coin >= 0)
      coinComputations([...coins], amount - i * coin, results, { ...path });
  }
};

const coinCombo = (coins, amount) => {
  const results = [];
  coinComputations(coins, amount, results);
  return results;
};

const coins1 = [2, 3, 5, 7];
const amount1 = 17;

console.log(coinCombo(coins1, amount1));

const coins2 = [2,3,5];
const amount2 = 11;

console.log(coinCombo(coins2, amount2));

const coins3 = [3,5];
const amount3 = 7;

console.log(coinCombo(coins3, amount3));
