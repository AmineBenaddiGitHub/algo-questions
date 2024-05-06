/*
Write a "word wrapping" function that takes in a string and the maximum width of a line of text,
and return the text "wrapped" to that line length.
*/

function wrap(str, len) {
  let ptr = 0;
  while (ptr < str.length) {
    ptr += len - 1;
    switch (true) {
      case str[ptr] === " ":
        str = str.substring(0, ptr) + "\n" + str.substring(ptr + 1);
        ptr += 1;
        break;
      case str[ptr] === undefined:
        break;
      case str[ptr - 1] !== " " && str[ptr + 1] !== " ":
        str = str.substring(0, ptr) + "-\n" + str.substring(ptr);
        ptr += 2;
        break;
      case str[ptr - 1] === " " && str[ptr + 1] !== " ":
        str = str.substring(0, ptr) + "\n" + str.substring(ptr);
        ptr += 1;
    }
  }
  return str;
}

console.log(wrap("Hello, world! I am hungry.", 10));
/*
Hello, wo-
rld! I am
hungry.
*/
console.log(wrap("Hello, world! I am hungry.", 9));
/*
Hello, w-
orld! I 
am hungr-
y.
*/
