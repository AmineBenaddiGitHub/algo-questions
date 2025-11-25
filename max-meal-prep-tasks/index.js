/*
Given an array of meal prep tasks for Thanksgiving, where each task is represented as
[taskName, startTime, endTime], return the maximum number of non-overlapping tasks you can complete,
along with the names of the chosen tasks in the order they were selected.
Task times are inclusive of start but exclusive of end.

Example:

const tasks = [
  ["Make Gravy", 10, 11],
  ["Mash Potatoes", 11, 12],
  ["Bake Rolls", 11, 13],
  ["Prep Salad", 12, 13]
];

maxMealPrepTasks(tasks)
> {
    count: 3,
    chosen: ["Make Gravy", "Mash Potatoes", "Prep Salad"]
  }
*/

function maxMealPrepTasks(tasks, path = [], results = []) {
  if (tasks.length === 0) {
    results.push(path);
  }
  Array.from({ length: tasks.length }, (_, i) => i).forEach((e) => {
    let copyTasks = tasks.slice(e + 1, tasks.length);
    const copyPath = [...path];
    if (path.length === 0 || path.at(-1)[2] <= tasks[e][1]) {
      copyPath.push(tasks[e]);
    }
    maxMealPrepTasks(copyTasks, copyPath, results);
  });
  return results
    .reduce((acc, v) => (v.length > acc.length ? v : acc), results[0])
    .reduce(
      (acc, v) => ({
        count: acc.count + 1,
        chosen: [...acc.chosen, v[0]],
      }),
      {
        count: 0,
        chosen: [],
      }
    );
}

console.log(
  maxMealPrepTasks([
    ["Make Gravy", 10, 11],
    ["Mash Potatoes", 11, 12],
    ["Bake Rolls", 11, 13],
    ["Prep Salad", 12, 13],
  ])
);
