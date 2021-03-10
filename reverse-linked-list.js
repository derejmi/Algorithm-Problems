/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let on = head;
  let prev = null;

  while (on !== null) {
    let temp = on.next;
    on.next = prev;
    prev = on;
    on = temp;
  }

  return prev;
};
