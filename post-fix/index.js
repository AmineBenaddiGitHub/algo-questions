/*
Write a function that evaluates a postfix expression (also known as Reverse Polish Notation) and returns the result.
The expression will contain single-digit integers and the operators +, -, *, and /.
You can assume the input is always a valid expression!
*/

function compute(o, a, b) {
  switch (o) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return 0;
  }
}

function evaluatePostfix(exp) {
  const groups = exp.split(/[+\-*/]/g);
  const operators = exp.split("").reduce((acc, e) => {
    if (e === "+" || e === "-" || e === "*" || e === "/") {
      acc.push(e);
    }
    return acc;
  }, []);
  const digits = groups
    .filter((e) => e !== "")
    .map((e) => e.split("").map((v) => parseInt(v)));
  while (digits.some((e) => e.length > 1)) {
    const d = digits.find((e) => e.length > 1);
    const i = digits.indexOf(d);
    const o = operators[i];
    const v = d.reduce(
      (acc, e) => compute(o, acc, e),
      o === "+" || o === "-" ? 0 : 1
    );
    digits[i] = [v];
    operators[i] = "";
  }
  const lastOperator = operators.find((e) => e !== "");
  const lastDigits = digits.flat();
  return lastOperator
    ? lastDigits.reduce(
        (acc, e) => compute(lastOperator, acc, e),
        lastOperator === "+" || lastOperator === "-" ? 0 : 1
      )
    : lastDigits[0];
}

console.log(evaluatePostfix("12+"));
console.log(evaluatePostfix("56+7*"));
console.log(evaluatePostfix("56+78+*"));
