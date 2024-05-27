/*
Write a program that implements the DelayedTaskExecutor interface defined below.
Think about how it would work if you ran the exec function multiple times in a row before the task is run!
*/

const crypto = require("crypto");

class Task {
  constructor(time, callback) {
    this.time = time;
    this.run = callback;
    this.uid = crypto.randomUUID();
  }

  timeStamp() {
    return new Date(this.time);
  }
}

class DelayedTaskExecutor {
  constructor() {
    this.set = new Set();
  }

  exec(task) {
    if (!this.set.has(task.uid)) {
      this.set.add(task.uid);
      const now = new Date();
      if (now.getTime() < task.timeStamp().getTime()) {
        setTimeout(task.run, task.timeStamp().getTime() - now.getTime());
      }
    }
  }
}

const task = new Task("2024-05-27 13:59:00", () => {
  console.log("coucou");
});

const executor = new DelayedTaskExecutor();

console.log(task.timeStamp());
console.log(task.uid);
executor.exec(task);
executor.exec(task);
executor.exec(task);
executor.exec(task);
