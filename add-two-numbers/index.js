// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let res = new ListNode((l1.val + l2.val) % 10);
  let ptr = res;
  let ret = Math.floor((l1.val + l2.val) / 10);
  while (l1.next && l2.next) {
    l1 = l1.next;
    l2 = l2.next;
    let tmp = new ListNode((l1.val + l2.val + ret) % 10);
    ret = Math.floor((l1.val + l2.val + ret) / 10);
    ptr.next = tmp;
    ptr = ptr.next;
  }
  while (l1.next && l2.next === null) {
    l1 = l1.next;
    let tmp = new ListNode((l1.val + ret) % 10);
    ret = Math.floor((l1.val + ret) / 10);
    ptr.next = tmp;
    ptr = ptr.next;
  }
  while (l1.next === null && l2.next) {
    l2 = l2.next;
    let tmp = new ListNode((l2.val + ret) % 10);
    ret = Math.floor((l2.val + ret) / 10);
    ptr.next = tmp;
    ptr = ptr.next;
  }
  while (l1.next === null && l2.next === null && ret !== 0) {
    let tmp = new ListNode(ret % 10);
    ret = Math.floor(ret / 10);
    ptr.next = tmp;
    ptr = ptr.next;
  }
  return res;
};
