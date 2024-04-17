/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;

  const mergeTwoLists = (l1, l2) => {
    if (!l1 || !l2) return l1 || l2;
    if (l1.val > l2.val) [l1, l2] = [l2, l1];
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  };

  while (lists.length > 1) {
    let a = lists.shift();
    let b = lists.shift();
    const merged = mergeTwoLists(a, b);
    lists.push(merged);
  }

  return lists[0];
};
