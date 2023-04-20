function maxPointsOnLine(array) {
  let maxPoints = 0;
  array.forEach((element, idx) => {
    const vectors = [];
    array.forEach((node, jdx) => {
      if (idx < jdx) {
        vectors.push([node[0] - element[0], node[1] - element[1]]);
      }
    });
    vectors.forEach((vector1) => {
      let localMaxPointsOnLine = 0;
      vectors.forEach((vector2) => {
        if (
          Math.abs(vector1[0] * vector2[1] - vector1[1] * vector2[0]) < 0.00001
        ) {
          localMaxPointsOnLine++;
        }
      });
      if (localMaxPointsOnLine > maxPoints) maxPoints = localMaxPointsOnLine;
    });
  });
  return maxPoints + 1;
}

console.log(
  maxPointsOnLine([
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4],
  ])
);
