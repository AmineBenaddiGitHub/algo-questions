/*
const string = `Hello, world!
how are ya?`; // or "Hello, world!\nhow are ya?"
const commands = 'jlhll';

getCharAfterVimCommands(string, commands)
> 'w'
 */

function getCharAfterVimCommands(str, commands) {
  const matrix = str.split("\n").map((e) => e.split(""));
  const pos = [0, 0];
  for (i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case "h":
        if (pos[1] > 0) pos[1] -= 1;
        break;
      case "l":
        if (pos[1] < matrix[pos[0]].length - 1) pos[1] += 1;
        break;
      case "j":
        if (pos[0] < matrix.length - 1) {
          pos[0] += 1;
        }
        break;
      case "k":
        if (pos[0] > 0) {
          pos[0] -= 1;
        }
        break;
      default:
        break;
    }
    console.log(commands[i], pos);
  }
  return matrix[pos[0]][Math.min(pos[1], matrix[pos[0]].length - 1)];
}

const str = `Hello, world!
how are ya?`;
const commands = "jlhll";
console.log(getCharAfterVimCommands(str, commands));
