/*
Given a list of integers representing the heights of buildings,
return the maximum number of buildings that can be seen when looking from the left.
A building can see another building if it is taller than all the buildings to its left.
The height of the tallest building is included in the count.
*/

function seeBuildingsLeft(arr) {
  return Math.max(
    ...arr.map((building, idx) => {
      const prevBuildings = arr.slice(0, idx);
      const prevTallerBuilIdx = prevBuildings.lastIndexOf(
        prevBuildings.filter((b) => b >= building).at(-1)
      );
      return idx - prevTallerBuilIdx;
    })
  );
}

console.log(seeBuildingsLeft([1, 2, 3, 4, 5]));
console.log(seeBuildingsLeft([5, 4, 3, 2, 1]));
console.log(seeBuildingsLeft([3, 7, 8, 3, 6, 1]));
