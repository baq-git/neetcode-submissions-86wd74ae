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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root) {
            return false;
        }

        if (this.dfsCheckSame(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    /**
     * @param {TreeNode} curr
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    dfsCheckSame(curr, subRoot) {
        if (curr === null && subRoot === null) return true;
        if (curr === null || subRoot === null || curr.val !== subRoot.val) return false;

        let leftChecked = this.dfsCheckSame(curr.left, subRoot.left);
        let rightChecked = this.dfsCheckSame(curr.right, subRoot.right);

        return leftChecked && rightChecked;
    }
}
