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
  const nodes = new Set();

  let on = head;

  while (on !== null) {
    if (nodes.has(on)) return true;
    nodes.add(on);
    on = on.next;
  }

  return false;
};
