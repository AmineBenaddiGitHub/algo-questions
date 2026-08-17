/*
Given the dimensions of a large rectangle n x m and a second rectangle a x b,
return the maximum number of second rectangles that can be packed into the larger
one without overlapping.
You may rotate the smaller rectangle 90 degrees.

Example:

> packRectangles(10, 10, 3, 4)
> 6

> packRectangles(10, 6, 2, 3)
> 10

> packRectangles(10, 6, 11, 2)
> 0
*/

function packRectangles(n, m, a, b) {
  if (Math.min(n, m) < Math.min(a, b) || Math.max(n, m) < Math.max(a, b))
    return 0;
  const orientationX =
      n < a
        ? { n, m, a: b, b: a, rest: n % b }
        : n % a < n % b
          ? { n, m, a, b, rest: n % a }
          : { n, m, a: b, b: a, rest: n % b },
    orientationY =
      m < a
        ? { n, m, a, b, rest: m % b }
        : m % a < m % b
          ? { n, m, a: b, b: a, rest: m % a }
          : { n, m, a, b, rest: m % b };
  const unfeasibleOrientation =
    orientationX.m < orientationX.b || orientationY.n < orientationY.a;
  const orientation = unfeasibleOrientation
    ? orientationX.m < orientationX.b
      ? orientationY
      : orientationX
    : orientationX.rest < orientationY.rest
      ? orientationX
      : orientationY;

  return (
    Math.trunc(orientation.n / orientation.a) *
      Math.trunc(orientation.m / orientation.b) +
    Math.max(
      packRectangles(
        orientation.n % orientation.a,
        orientation.m,
        orientation.a,
        orientation.b,
      ),
      packRectangles(
        orientation.n,
        orientation.m % orientation.b,
        orientation.a,
        orientation.b,
      ),
    )
  );
}

console.log(packRectangles(10, 10, 3, 4));
console.log(packRectangles(10, 6, 2, 3));
console.log(packRectangles(10, 6, 11, 2));
console.log(packRectangles(10, 10, 1, 4));
console.log(packRectangles(10, 10, 1, 3));
