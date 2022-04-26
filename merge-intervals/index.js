const mergeIntervals = (arraysArray, cpt = 0) => {
  let shouldMerge = false;
  let idx = 0;
  for (idx = cpt + 1; idx < arraysArray.length; idx++) {
    if (
      (arraysArray[idx][0] >= arraysArray[cpt][0] &&
        arraysArray[idx][0] <= arraysArray[cpt][1]) ||
      (arraysArray[idx][1] >= arraysArray[cpt][0] &&
        arraysArray[idx][1] <= arraysArray[cpt][1]) ||
      (arraysArray[cpt][1] >= arraysArray[idx][0] &&
        arraysArray[cpt][1] <= arraysArray[idx][1]) ||
      (arraysArray[cpt][0] >= arraysArray[idx][0] &&
        arraysArray[cpt][0] <= arraysArray[idx][1])
    ) {
      shouldMerge = true;
      break;
    }
  }
  if (shouldMerge === true) {
    arraysArray[cpt] = [
      Math.min(arraysArray[cpt][0], arraysArray[idx][0]),
      Math.max(arraysArray[cpt][1], arraysArray[idx][1]),
    ];
    arraysArray.splice(idx, 1);
    mergeIntervals(arraysArray, cpt);
  } else {
    if (cpt < arraysArray.length - 1) mergeIntervals(arraysArray, cpt + 1);
  }
  return arraysArray;
};

console.log(
  mergeIntervals([
    [1, 4],
    [2, 6],
    [8, 10],
    [15, 20],
  ])
);
console.log(
  mergeIntervals([
    [1, 4],
    [8, 10],
    [2, 6],
    [15, 20],
  ])
);
console.log(
  mergeIntervals([
    [1, 4],
    [8, 10],
    [15, 20],
    [2, 6],
  ])
);
console.log(
    mergeIntervals([
      [1, 4],
      [8, 10],
      [7, 20],
      [2, 6],
    ])
  );
console.log(
  mergeIntervals([
    [1, 2],
    [2, 7],
  ])
);
console.log(
  mergeIntervals([
    [2, 7],
    [1, 2],
  ])
);
