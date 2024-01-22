/**
Write a data structure for a simple binary tree, and a function that prints a given tree.

Example:

let root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);

> printTree(root)
> "
    1
   / \
  2   3
 / \
4   5
"
*/

function Node(val) {
  if (val !== " ") {
    this.val = val;
    this.left = new Node(" ");
    this.right = new Node(" ");
  }
}

function printTree(root, res = [], depth = 1) {
  if (root) {
    res.push({ val: root.val || " ", depth: depth });
    if (root.left) {
      printTree(root.left, res, depth + 2);
      res.push({ val: "/", depth: depth + 1 });
    } else {
      res.push({ val: " ", depth: depth + 1 });
    }
    if (root.right) {
      printTree(root.right, res, depth + 2);
      res.push({ val: "\\", depth: depth + 1 });
    } else {
      res.push({ val: " ", depth: depth + 1 });
    }
  }
  let leafs = res
    .toSorted((a, b) => a.depth - b.depth)
    .reduce((acc, val) => {
      const state = acc.find((e) => e.depth === val.depth);
      if (state) {
        state.list.push(val.val);
      } else {
        acc.push({ list: [val.val], depth: val.depth });
      }
      return acc;
    }, [])
    .reverse();
  leafs.shift();
  let spaces = [];
  const cycles = [3, 1];
  for (let i = 0; i < leafs.length; i++) {
    const level = [];
    let ptr = 0;
    if (i === 0) {
      level.push(0);
      for (let j = 0; j < leafs[i].list.length - 1; j++) {
        level.push(cycles[ptr % 2]);
        ptr++;
      }
    } else if (i === 1) {
      level.push(1);
      for (let j = 0; j < leafs[i].list.length - 1; j++) {
        level.push(cycles[(ptr + 1) % 2]);
        ptr++;
      }
    } else {
      const last = spaces.at(-1);
      if (i % 2 === 0) {
        level.push(last[0] + Math.floor(last[1] / 2) + 1);
        const dist = last[1] + last[2] + 1;
        for (let j = 0; j < leafs[i].list.length - 1; j++) {
          level.push(dist);
        }
      } else {
        level.push(last[0] + 1);
        cycles[0] = last[1] - 2;
        cycles[1] = last[1] + 2;
        for (let j = 0; j < leafs[i].list.length - 1; j++) {
          level.push(cycles[ptr % 2]);
          ptr++;
        }
      }
    }
    spaces.push(level);
  }

  leafs = leafs.reverse();
  spaces = spaces.reverse();

  const output = [];
  for (let i = 0; i < leafs.length; i++) {
    const level = [];
    for (let j = 0; j < leafs[i].list.length; j++) {
      level.push(" ".repeat(spaces[i][j]));
      level.push(leafs[i].list[j]);
    }
    output.push(level.join(""));
  }
  // return leafs;
  return output.join("\r\n");
}

const root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);

console.log(printTree(root1));
/*
           1
      /         \
     2           3
   /   \       /   \
  4     5
 / \   / \
*/

const root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.right.left = new Node(4);
root2.right.right = new Node(5);

console.log(printTree(root2));
/*
           1
      /         \
     2           3
   /   \       /   \
              4     5
             / \   / \
*/

const root3 = new Node(1);
root3.left = new Node(2);
root3.right = new Node(3);
root3.left.left = new Node(4);
root3.left.right = new Node(5);
root3.right.left = new Node(6);
root3.right.right = new Node(7);

const root4 = new Node("a");
root4.left = new Node("b");
root4.right = new Node("c");
root4.left.left = new Node("d");
root4.left.right = new Node("e");
root4.right.left = new Node("f");
root4.right.right = new Node("g");
root4.left.left.left = new Node("h");
root4.left.left.right = new Node("i");
root4.left.right.left = new Node("j");
root4.left.right.right = new Node("k");
root4.right.left.left = new Node("l");
root4.right.left.right = new Node("m");
root4.right.right.left = new Node("n");
root4.right.right.right = new Node("o");
root4.left.left.left.left = new Node("p");
root4.left.left.left.right = new Node("q");
root4.left.left.right.left = new Node("r");
root4.left.left.right.right = new Node("s");
root4.left.right.left.left = new Node("t");
root4.left.right.left.right = new Node("u");
root4.left.right.right.left = new Node("v");
root4.left.right.right.right = new Node("w");
root4.right.left.left.left = new Node("x");
root4.right.left.left.right = new Node("y");
root4.right.left.right.left = new Node("z");
root4.right.left.right.right = new Node("1");
root4.right.right.left.left = new Node("2");
root4.right.right.left.right = new Node("3");
root4.right.right.right.left = new Node("4");
root4.right.right.right.right = new Node("5");

console.log(printTree(root4));

/*
                                               a
                        /                                             \
                       b                                               c
            /                     \                         /                     \
           d                       e                       f                       g
      /         \             /         \             /         \             /         \
     h           i           j           k           l           m           n           o
   /   \       /   \       /   \       /   \       /   \       /   \       /   \       /   \
  p     q     r     s     t     u     v     w     x     y     z     1     2     3     4     5
 / \   / \   / \   / \   / \   / \   / \   / \   / \   / \   / \   / \   / \   / \   / \   / \
*/
