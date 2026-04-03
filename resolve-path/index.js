/*
You are given a file system represented as an object where keys are absolute paths
and values are either null (real file/directory) or a string
(a symlink pointing to another path).
Write a function that resolves a given path to its real destination,
following symlinks along the way. If a symlink chain forms a cycle, return null.

Example:

const fs = {
  "/a": "/b",
  "/b": "/c",
  "/c": null,
  "/loop1": "/loop2",
  "/loop2": "/loop1",
  "/real": null,
  "/alias": "/real",
};

resolvePath(fs, "/a");      // "/c"
resolvePath(fs, "/alias");  // "/real"
resolvePath(fs, "/loop1");  // null
resolvePath(fs, "/real");   // "/real"

*/

const fs = {
  "/a": "/b",
  "/b": "/c",
  "/c": null,
  "/loop1": "/loop2",
  "/loop2": "/loop1",
  "/real": null,
  "/alias": "/real",
};

function resolvePath(fs, entry) {
  if (fs[entry] === null) return entry;
  if (!fs[entry]) return null;
  let ptr = entry;
  do {
    if (fs[ptr]) ptr = fs[ptr];
  } while (fs[ptr] && ptr !== entry);
  return ptr !== entry ? ptr : null;
}

console.log(resolvePath(fs, "/a"));
console.log(resolvePath(fs, "/alias"));
console.log(resolvePath(fs, "/loop1"));
console.log(resolvePath(fs, "/real"));
console.log(resolvePath(fs, "/test"));
