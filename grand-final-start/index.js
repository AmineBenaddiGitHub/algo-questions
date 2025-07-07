/*
Given an array of fireworks representing a series going off,
write a function to find the "grand finale" of the show!
A grand finale is defined as the longest subarray where the average
size is at least 5, the minimum velocity is 3, and the difference
between the min and max height is no more than 10.
Return the starting index of the grand finale.
*/

function grandFinaleStart(arr, minVelocity = 3, minSize = 5, maxDiff = 10) {
  let minHeight = arr[0].height,
    maxHeight = arr[0].height,
    length = 0,
    maxLength = 0,
    currentStartingIndex = null,
    startingIndex = 0;
  arr.forEach((e, i) => {
    if (e > maxHeight) maxHeight = e;
    if (e < minHeight) minHeight = e;
    if (
      e.velocity >= minVelocity &&
      e.size >= minSize &&
      maxHeight - minHeight <= maxDiff
    ) {
      length += 1;
      if (currentStartingIndex === null) currentStartingIndex = i;
    } else {
      if (length >= maxLength) {
        maxLength = length;
        startingIndex = currentStartingIndex;
      }
      currentStartingIndex = null;
      minHeight = e.height;
      maxHeight = e.height;
      length = 0;
    }
  });
  if (length >= maxLength) {
    maxLength = length;
    startingIndex = currentStartingIndex;
  }
  return { startingIndex, maxLength };
}

let fireworks = [
  { height: 10, size: 6, velocity: 4 },
  { height: 13, size: 3, velocity: 2 },
  { height: 17, size: 6, velocity: 3 },
  { height: 21, size: 8, velocity: 4 },
  { height: 19, size: 5, velocity: 3 },
  { height: 18, size: 4, velocity: 4 },
];

console.log(grandFinaleStart(fireworks));

fireworks = [
  { height: 10, size: 6, velocity: 4 },
  { height: 13, size: 3, velocity: 2 },
  { height: 17, size: 6, velocity: 3 },
  { height: 21, size: 8, velocity: 4 },
  { height: 19, size: 5, velocity: 3 },
];

console.log(grandFinaleStart(fireworks));

fireworks = [
  { height: 17, size: 6, velocity: 3 },
  { height: 21, size: 8, velocity: 4 },
  { height: 19, size: 5, velocity: 3 },
];

console.log(grandFinaleStart(fireworks));
