/**
 * Given an array of function logs, where each log consists of a function name,
 * a timestamp, and an event (either start or end),
 * return the total execution time for each function.
 */

function calculateExecutionTimes(array) {
  return array.reduce((acc, entry) => {
    if (!acc[entry.name]) acc[entry.name] = 0;
    if (entry.event === "start") acc[entry.name] -= entry.time;
    if (entry.event === "end") acc[entry.name] += entry.time;
    return acc;
  }, {});
}

console.log(
  calculateExecutionTimes([
    { name: "main", time: 0, event: "start" },
    { name: "subTask1", time: 5, event: "start" },
    { name: "subTask1", time: 10, event: "end" },
    { name: "subTask2", time: 15, event: "start" },
    { name: "subTask2", time: 20, event: "end" },
    { name: "main", time: 25, event: "end" },
  ])
);
