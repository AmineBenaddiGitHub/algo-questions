/*
Given a direction and a number, write a function that outputs an arrow of asterisks with the height of that number! 
*/

function printArrow(direction, number) {
  if (number <= 0) return "wrong number";
  if (["left", "right"].includes(direction))
    return (
      Array.from({ length: number }, (_, idx) =>
        direction === "right"
          ? " ".repeat(idx) + "*"
          : " ".repeat(number - idx - 1) + "*"
      ).join("\n") +
      (number > 1 ? "\n" : "") +
      Array.from({ length: number - 1 }, (_, idx) =>
        direction === "right"
          ? (number - idx - 2 > 0 ? " ".repeat(number - idx - 2) : "") + "*"
          : " ".repeat(idx + 1) + "*"
      ).join("\n")
    );
  if (["up", "down"].includes(direction))
    return direction === "up"
      ? Array.from(
          { length: number },
          (_, idx) =>
            " ".repeat(number - idx - 1) +
            "*" +
            (idx > 0 ? " ".repeat(2 * idx - 1) + "*" : "")
        ).join("\n")
      : Array.from(
          { length: number },
          (_, idx) =>
            " ".repeat(idx) +
            "*" +
            (idx < number - 1
              ? " ".repeat(2 * (number - idx - 1) - 1) + "*"
              : "")
        ).join("\n");

  return "wrong direction";
}

console.log("right 1");
console.log(printArrow("right", 1));
console.log("right 2");
console.log(printArrow("right", 2));
console.log("right 10");
console.log(printArrow("right", 10));
console.log("left 1");
console.log(printArrow("left", 1));
console.log("left 2");
console.log(printArrow("left", 2));
console.log("left 10");
console.log(printArrow("left", 10));
console.log("up 1");
console.log(printArrow("up", 1));
console.log("up 2");
console.log(printArrow("up", 2));
console.log("up 10");
console.log(printArrow("up", 10));
console.log("down 1");
console.log(printArrow("down", 1));
console.log("down 2");
console.log(printArrow("down", 2));
console.log("down 10");
console.log(printArrow("down", 10));
console.log("xxx -10");
console.log(printArrow("xxx", -10));
console.log("xxx 10");
console.log(printArrow("xxx", 10));

/*
Results:

right 1
*
right 2
*
 *
*
right 10
*
 *
  *
   *
    *
     *
      *
       *
        *
         *
        *
       *
      *
     *
    *
   *
  *
 *
*
left 1
*
left 2
 *
*
 *
left 10
         *
        *
       *
      *
     *
    *
   *
  *
 *
*
 *
  *
   *
    *
     *
      *
       *
        *
         *
up 1
*
up 2
 *
* *
up 10
         *
        * *
       *   *
      *     *
     *       *
    *         *
   *           *
  *             *
 *               *
*                 *
down 1
*
down 2
* *
 *
down 10
*                 *
 *               *
  *             *
   *           *
    *         *
     *       *
      *     *
       *   *
        * *
         *
xxx -10
wrong number
xxx 10
wrong direction

*/
