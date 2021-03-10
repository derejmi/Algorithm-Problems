/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast !== null) {
    if (fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    } else {
      return false;
    }

    if (slow === fast) {
      return true;
    }
  }

  return false;
};
