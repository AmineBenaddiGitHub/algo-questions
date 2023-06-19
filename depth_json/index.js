function depthJSON(obj, depth = 0) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  if (typeof obj !== "object") {
    return depth;
  }
  if (
    (Array.isArray(obj) && obj.length === 0) ||
    (obj.constructor === Object && keys.length === 0)
  ) {
    return depth + 1;
  } else {
    let maxDepth = depth;
    values.forEach((v) => {
      const localDepth = depthJSON(v, depth + 1);
      if (localDepth > maxDepth) {
        maxDepth = localDepth;
      }
    });
    return maxDepth;
  }
}

console.log(depthJSON([]) === 1);
console.log(depthJSON([1, 2, 3, 4, 5]) === 1);
console.log(depthJSON([{ a: [] }, ["abc"]]) === 3);
console.log(depthJSON([{ a: { b: 1, c: 2 } }, ["abc"]]) === 3);
console.log(depthJSON([{ a: { b: 1, c: 2 } }, ["abc", {}]]) === 3);
console.log(depthJSON([{ a: { b: [10, 20], c: 2 } }, ["abc"]]) === 4);
console.log(depthJSON([{ a: { b: [10, 20, {}], c: 2 } }, ["abc"]]) === 5);
console.log(
  depthJSON([{ a: { b: [10, 20, { d: [] }], c: 2 } }, ["abc"]]) === 6
);
console.log(
  depthJSON([{ a: { b: [10, 20, { d: [{}] }], c: 2 } }, ["abc"]]) === 7
);
console.log(
  depthJSON([{ a: { b: [10, 20, { d: [{ e: [] }] }], c: 2 } }, ["abc"]]) === 8
);
console.log(
  depthJSON([{ a: { b: [10, 20, { d: [{ e: [{}] }] }], c: 2 } }, ["abc"]]) === 9
);
