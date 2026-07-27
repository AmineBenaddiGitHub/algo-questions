/*
Given an array of ice cream orders and a freezer stock map, return how many orders can be
fulfilled before the first unavailable flavor.

Example:

> fulfilledOrdersBeforeFailure(
    [["chocolate"],["chocolate"],["chocolate"]],
    { chocolate: 2 })
> 2

> fulfilledOrdersBeforeFailure(
    [["vanilla","vanilla"],["chocolate","mint"],["strawberry"],["strawberry","mint"]],
    { vanilla: 2, chocolate: 1, mint: 1, strawberry: 5 })
> 3

> fulfilledOrdersBeforeFailure(
    [["rocky road"],["vanilla"]],
    { vanilla: 3 })
> 0
*/

function fulfilledOrdersBeforeFailure(order, stock) {
  return order.reduce(
    (acc, v) => {
      if (acc.flag) {
        const allowed = v.reduce(
          (a, e) => {
            if (a.allowed && acc.stock[e] && acc.stock[e] > 0) acc.stock[e]--;
            else a.allowed = false;
            return a;
          },
          {
            allowed: true,
          },
        ).allowed;
        if (allowed) acc.counter++;
        acc.flag = allowed;
      }

      return acc;
    },
    {
      stock,
      flag: true,
      counter: 0,
    },
  ).counter;
}

console.log(
  fulfilledOrdersBeforeFailure([["chocolate"], ["chocolate"], ["chocolate"]], {
    chocolate: 2,
  }),
);

console.log(
  fulfilledOrdersBeforeFailure(
    [
      ["vanilla", "vanilla"],
      ["chocolate", "mint"],
      ["strawberry"],
      ["strawberry", "mint"],
    ],
    { vanilla: 2, chocolate: 1, mint: 1, strawberry: 5 },
  ),
);

console.log(
  fulfilledOrdersBeforeFailure([["rocky road"], ["vanilla"]], { vanilla: 3 }),
);
