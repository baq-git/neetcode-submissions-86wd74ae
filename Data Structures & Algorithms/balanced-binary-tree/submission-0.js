/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
   * @param {TreeNode} root
   * @return {boolean}
   */
  isBalanced(root) {
    return this.dfs(root) <= -1 ? false : true;
  }

  /**
   * @param {TreeNode} root
   * @return {number}
   */
  dfs(node) {
    if (node === null) return 0;

    let leftHeight = this.dfs(node.left);
    if (leftHeight === -1) return -1;
    let rightHeight = this.dfs(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }

    return 1 + Math.max(leftHeight, rightHeight);
  }

}
