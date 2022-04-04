/**
Given two strings n and m, return true if they are equal when both are entered into text editors.
But: a # means a backspace character (deleting backwards), and a % means a delete character (deleting forwards).

Example:

> equalWithDeletions("a##x", "#a#x")
> true      // both strings become "x"

> equalWithDeletions("fi##f%%%th %%year #time###", "fifth year time")
> false     // the first string becomes "fart"
 */

const formatter = (s, ptr = 0) => {
  if (ptr > s.length) return s;
  if (s[ptr] !== "#" && s[ptr] !== "%") return formatter(s, ptr + 1);
  if (s[ptr] === "#") {
    const part1 = ptr === 0 ? "" : s.slice(0, ptr - 1);
    const part2 = s.slice(ptr + 1);
    return formatter(part1 + part2, Math.max(ptr - 1, 0));
  }
  if (s[ptr] === "%") {
    const idx = s
      .slice(ptr)
      .split("")
      .findIndex((e) => e !== "#" && e !== "%");
    const part1 = ptr === 0 ? "" : s.slice(0, ptr);
    const part2 = idx === -1 ? slice(ptr + 1) : s.slice(ptr + 1, ptr + idx);
    const part3 = idx === -1 ? "" : s.slice(ptr + idx + 1);
    return formatter(part1 + part2 + part3, ptr);
  }
};

const equalWithDeletions = (m, n) => formatter(m) === formatter(n);

// console.log(formatter("a##x", 0));
console.log(equalWithDeletions("a##x", "#a#x"));
console.log(
  equalWithDeletions("fi##f%%%th %%year #time###", "fifth year time")
);
