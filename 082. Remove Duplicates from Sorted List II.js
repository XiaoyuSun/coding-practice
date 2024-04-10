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
var deleteDuplicates = function (head) {
  let sentinel = new ListNode(-1, head);
  let predecessor = sentinel;

  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }

      predecessor.next = head.next;
    } else {
      predecessor = predecessor.next;
    }

    head = head.next;
  }

  return sentinel.next;
};
