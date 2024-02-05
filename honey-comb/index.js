/**
Write a function that makes an ASCII "honeycomb" shape of a given size.
*/

function honeyComb(n) {
  if (n % 2 !== 0) throw new Error("n should be even");
  const res = [" ".repeat(2 * n) + "_".repeat(n)];
  for (let i = 0; i < n / 2; i++) {
    if (i !== n / 2 - 1)
      res.push(
        " ".repeat(n + (n - i) - 1) + "/" + " ".repeat(n + 2 * i) + "\\"
      );
    else
      res.push(
        " ".repeat(n / 2) +
          "_".repeat(n) +
          "/" +
          " ".repeat(n + 2 * i) +
          "\\" +
          "_".repeat(n)
      );
  }
  for (let i = 0; i < n / 2; i++) {
    res.push(
      " ".repeat(n / 2 - i - 1) +
        "/" +
        " ".repeat(n + 2 * i) +
        "\\" +
        (i !== n / 2 - 1 ? " " : "_").repeat(2 * n - 2 * i - 2) +
        "/" +
        " ".repeat(n + 2 * i) +
        "\\"
    );
  }
  for (let i = 0; i < n / 2; i++) {
    res.push(
      " ".repeat(i) +
        "\\" +
        (i !== n / 2 - 1 ? " " : "_").repeat(2 * n - 2 * i - 2) +
        "/" +
        " ".repeat(n + 2 * i) +
        "\\" +
        (i !== n / 2 - 1 ? " " : "_").repeat(2 * n - 2 * i - 2) +
        "/"
    );
  }
  for (let i = 0; i < n / 2; i++) {
    res.push(
      " ".repeat(n / 2 - i - 1) +
        "/" +
        " ".repeat(n + 2 * i) +
        "\\" +
        (i !== n / 2 - 1 ? " " : "_").repeat(2 * n - 2 * i - 2) +
        "/" +
        " ".repeat(n + 2 * i) +
        "\\"
    );
  }
  for (let i = 0; i < n / 2; i++) {
    res.push(
      " ".repeat(i) +
        "\\" +
        (i !== n / 2 - 1 ? " " : "_").repeat(2 * n - 2 * i - 2) +
        "/" +
        " ".repeat(n + 2 * i) +
        "\\" +
        (i !== n / 2 - 1 ? " " : "_").repeat(2 * n - 2 * i - 2) +
        "/"
    );
  }
  for (let i = 0; i < n / 2; i++) {
    res.push(
      " ".repeat(n + n / 2 + i) +
        "\\" +
        (i !== n / 2 - 1 ? " " : "_").repeat(2 * n - 2 * i - 2) +
        "/"
    );
  }
  return res.join("\n");
}

console.log(honeyComb(2));
/*
    __
 __/  \__
/  \__/  \
\__/  \__/
/  \__/  \
\__/  \__/
   \__/
*/
console.log(honeyComb(4));
/*
        ____
       /    \
  ____/      \____
 /    \      /    \
/      \____/      \
\      /    \      /
 \____/      \____/
 /    \      /    \
/      \____/      \
\      /    \      /
 \____/      \____/
      \      /
       \____/
*/
console.log(honeyComb(6));
/*
            ______
           /      \
          /        \
   ______/          \______
  /      \          /      \
 /        \        /        \
/          \______/          \
\          /      \          /
 \        /        \        /
  \______/          \______/
  /      \          /      \
 /        \        /        \
/          \______/          \
\          /      \          /
 \        /        \        /
  \______/          \______/
         \          /
          \        /
           \______/
*/
console.log(honeyComb(8));
/*
                ________
               /        \
              /          \
             /            \
    ________/              \________
   /        \              /        \
  /          \            /          \
 /            \          /            \
/              \________/              \
\              /        \              /
 \            /          \            /
  \          /            \          /
   \________/              \________/
   /        \              /        \
  /          \            /          \
 /            \          /            \
/              \________/              \
\              /        \              /
 \            /          \            /
  \          /            \          /
   \________/              \________/
            \              /
             \            /
              \          /
               \________/
*/
console.log(honeyComb(10));
/*
                    __________
                   /          \
                  /            \
                 /              \
                /                \
     __________/                  \__________
    /          \                  /          \
   /            \                /            \
  /              \              /              \
 /                \            /                \
/                  \__________/                  \
\                  /          \                  /
 \                /            \                /
  \              /              \              /
   \            /                \            /
    \__________/                  \__________/
    /          \                  /          \
   /            \                /            \
  /              \              /              \
 /                \            /                \
/                  \__________/                  \
\                  /          \                  /
 \                /            \                /
  \              /              \              /
   \            /                \            /
    \__________/                  \__________/
               \                  /
                \                /
                 \              /
                  \            /
                   \__________/
*/
