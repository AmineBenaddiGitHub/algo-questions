/*
Given an array of order objects for a restaurant, each with a table number and a list of ordered items.
Write a function that returns an object mapping each table number to a summary of how many times
each item was ordered at that table.
Extra credit: Could you go so far as to make this a restaurant management game?

Example:

const orders = [
  { table: 1, items: ["burger", "fries"] },
  { table: 2, items: ["burger", "burger", "fries"] },
  { table: 1, items: ["salad"] },
  { table: 2, items: ["fries"] }
];

> orderSummary(orders)
{
  1: { burger: 1, fries: 1, salad: 1 },
  2: { burger: 2, fries: 2 }
}
// or, string output format:
"Table 1 ordered 1 burger, 1 fries, and 1 salad. Table 2 ordered 2 burgers and 2 fries."
*/

function orderSummary(orders) {
  return orders.reduce((res, { table, items }) => {
    const bucket = (res[table] ??= {});
    for (const item of items) bucket[item] = (bucket[item] ?? 0) + 1;
    return res;
  }, {});
}

const orders = [
  { table: 1, items: ["burger", "fries"] },
  { table: 2, items: ["burger", "burger", "fries"] },
  { table: 1, items: ["salad"] },
  { table: 2, items: ["fries"] },
];

console.log(orderSummary(orders));
