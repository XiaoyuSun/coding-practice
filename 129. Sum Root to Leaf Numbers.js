/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0;

  const dfs = (node, currNum) => {
    if (!node) return;

    currNum = currNum * 10 + node.val;

    if (!node.left && !node.right) {
      sum += currNum;
      return;
    }

    dfs(node.left, currNum);
    dfs(node.right, currNum);
  };

  dfs(root, 0);

  return sum;
};
