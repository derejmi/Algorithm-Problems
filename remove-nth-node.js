function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  //1st traversal to get length
  let on = head;
  //we assume our LL to be of at least length 1 so we can start our counter at 1
  let counter = 0;
  while (on !== null) {
    counter++;
    on = on.next;
  }

  const length = counter;
  let left = length - n + 1;

  //handle head deleted
  if (n === length) {
    return head.next;
  }

  //point around to delete node
  else {
    let on2 = head;
    let i = 0;
    while (i < left - 1) {
      i++;
      if (i === left - 1) {
        on2.next = on2.next.next;
        return head;
      }

      on2 = on2.next;
    }
  }
};
