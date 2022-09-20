const GradToGPA = {
  A: 4,
  "A-": 3.7,
  "B+": 3.3,
  B: 3,
  "B-": 2.7,
  "C+": 2.3,
  C: 2,
  "C-": 1.7,
  "D+": 1.3,
  D: 1,
  "D-": 0.7,
  F: 0,
};

const calculateGPA = (arr) =>
  Math.round(
    10 *
      arr
        .map((e) => GradToGPA[e])
        .reduce((acc, val) => acc + val / arr.length, 0)
  ) / 10;
console.log(calculateGPA(["A"]));
console.log(calculateGPA(["F", "F", "F"]));
console.log(calculateGPA(["A", "A-", "B+", "B", "B-"]));
console.log(calculateGPA(["A", "B+", "C-", "A"]));
