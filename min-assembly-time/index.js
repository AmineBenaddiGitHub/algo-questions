/*
You’re assembling a custom mechanical keyboard.
Each required part has a delivery time in days and an assembly time in hours.
You can only assemble a part after it arrives, and you can only work on one part at a time.
Given an array of parts where each part is { name, arrivalDays, assemblyHours }
return the minimum total hours needed to finish assembling all parts, starting from hour 0.

Example:

minAssemblyTime([
  { name: "keycaps", arrivalDays: 1, assemblyHours: 2 },
  { name: "switches", arrivalDays: 2, assemblyHours: 3 },
  { name: "stabilizers", arrivalDays: 0, assemblyHours: 1 },
  { name: "PCB", arrivalDays: 1, assemblyHours: 4 },
  { name: "case", arrivalDays: 3, assemblyHours: 2 }
])

> 74
*/

function minAssemblyTime(orders) {
  const groupedOrders = Object.entries(
    Object.groupBy(orders, (e) => e.arrivalDays)
  )
    // Adding an offset of 0, if orders > 24, it will goto the next day
    .map((e) => [parseInt(e[0]), e[1], 0]);
  for (let idx = 0; idx < groupedOrders.length; idx++) {
    const [time, orders, offset] = groupedOrders[idx];
    const sumHours =
      orders.reduce((acc, v) => acc + v.assemblyHours, 0) + offset;
    if (sumHours <= 24) groupedOrders[idx][2] = sumHours;
    if (sumHours > 24 && idx === groupedOrders.length - 1)
      groupedOrders[idx][2] = sumHours;
    if (sumHours > 24 && idx < groupedOrders.length - 1) {
      groupedOrders[idx][2] = 24;
      if (time + 1 === groupedOrders[idx + 1][0]) {
        groupedOrders[idx + 1][2] = sumHours - 24;
      } else {
        groupedOrders.splice(idx + 1, 0, [idx + 1, [], sumHours - 24]);
      }
    }
  }
  console.log(groupedOrders);
  return groupedOrders.at(-1)[0] * 24 + groupedOrders.at(-1)[2];
}

console.log(
  minAssemblyTime([
    { name: "keycaps", arrivalDays: 1, assemblyHours: 2 },
    { name: "switches", arrivalDays: 2, assemblyHours: 3 },
    { name: "stabilizers", arrivalDays: 0, assemblyHours: 1 },
    { name: "PCB", arrivalDays: 1, assemblyHours: 4 },
    { name: "case", arrivalDays: 3, assemblyHours: 2 },
  ])
);

console.log(
  minAssemblyTime([
    { name: "keycaps", arrivalDays: 1, assemblyHours: 32 },
    { name: "switches", arrivalDays: 2, assemblyHours: 3 },
    { name: "stabilizers", arrivalDays: 0, assemblyHours: 1 },
    { name: "PCB", arrivalDays: 1, assemblyHours: 4 },
    { name: "case", arrivalDays: 3, assemblyHours: 2 },
  ])
);

console.log(
  minAssemblyTime([
    { name: "keycaps", arrivalDays: 1, assemblyHours: 32 },
    { name: "stabilizers", arrivalDays: 0, assemblyHours: 1 },
    { name: "PCB", arrivalDays: 1, assemblyHours: 4 },
    { name: "case", arrivalDays: 3, assemblyHours: 2 },
  ])
);
