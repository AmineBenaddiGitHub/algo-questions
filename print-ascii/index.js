/**
Print the ASCII printable characters code page (0x20-0x7E), without any built-ins or functions that do it for you.
 */

function printASCII() {
  return Array.from({ length: 95 }, (_, idx) => idx + 32)
    .map((e) => String.fromCharCode(e))
    .join("");
}

console.log(printASCII());
