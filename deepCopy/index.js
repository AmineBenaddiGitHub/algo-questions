/**
 Given a linked list, such that each node contains an
 additional random pointer which could point to any node
 in the list, or null, make a deep copy of the list and
 return the head node of the new copy.
 */

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

function deepCopy(head) {
  const newHead = new Node(head.val, null, null),
    stack = [newHead];
  let ptr = head,
    ptrC = newHead;
  while (ptr.next) {
    const elm = new Node(ptr.next.val, null, null);
    ptrC.next = elm;
    stack.push(elm);
    ptr = ptr.next;
    ptrC = ptrC.next;
  }
  ptr = head;
  ptrC = newHead;
  while (ptr) {
    const rand = ptr.random;
    if (rand) {
      const randC = stack.find((e) => e.val === rand.val);
      ptrC.random = randC;
    }
    ptr = ptr.next;
    ptrC = ptrC.next;
  }
  return newHead;
}

const head = new Node(0, null, null);
const elm1 = new Node(1, null, null);
const elm2 = new Node(2, null, null);
const elm3 = new Node(3, null, null);
const elm4 = new Node(4, null, null);
const elm5 = new Node(5, null, null);

head.next = elm1;
elm1.next = elm2;
elm2.next = elm3;
elm3.next = elm4;
elm4.next = elm5;

head.random = elm3;
elm1.random = head;
elm2.random = null;
elm3.random = elm5;
elm4.random = head;
elm5.random = elm2;

const newHead = deepCopy(head);

let ptr = head,
  ptrC = newHead;
while (ptr) {
  console.log("val equality ", ptr.val, ptr.val === ptrC.val);
  if (ptr.next) {
    console.log("next equality ", ptr.next.val, ptr.next.val === ptrC.next.val);
  }
  if (ptr.random) {
    console.log(
      "random equality ",
      ptr.random.val,
      ptr.random.val === ptrC.random.val
    );
  }
  console.log("objects inequality", !(ptr === ptrC));
  ptr = ptr.next;
  ptrC = ptrC.next;
}
