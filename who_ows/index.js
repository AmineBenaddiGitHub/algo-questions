/**
You went on a vacation with friends. Each of you paid for certain
meals on the trip for the group. Write a function that determines
who owes money to whom so that everyone pays equally.

Example:

let receipts = [
  { name: 'Ximena', paid: 45 },
  { name: 'Clara', paid: 130 },
  { name: 'Ximena', paid: 100 },
  { name: 'Cassidy', paid: 140 },
  { name: 'Cassidy', paid: 76 },
  { name: 'Clara', paid: 29 },
  { name: 'Ximena', paid: 20 },
]

$ whoOwes(receipts)
$ 'Clara owes Cassidy $19, Ximena owes Cassidy $17'
*/

const receipts = [
  { name: "Ximena", paid: 45 },
  { name: "Clara", paid: 130 },
  { name: "Ximena", paid: 100 },
  { name: "Cassidy", paid: 140 },
  { name: "Cassidy", paid: 76 },
  { name: "Clara", paid: 29 },
  { name: "Ximena", paid: 20 },
];

const whoOws = (receipts) => {
  const dict = {};
  receipts.forEach((e) => {
    if (dict.hasOwnProperty(e.name)) dict[e.name] += e.paid;
    else dict[e.name] = e.paid;
  });
  const average = Object.values(dict).reduce((acc, v) => acc + v, 0) / 3;
  let creditor = "";
  const debtor = [];
  for (const key in dict) {
    dict[key] -= average;
    if (dict[key] > 0) {
      creditor = key;
      break;
    }
  }
  for (const key in dict) {
    if (dict[key] < 0)
      debtor.push(`${key} owes ${creditor} $${-1 * dict[key]}`);
  }
  return debtor.sort().join(", ");
};

console.log(whoOws(receipts));
