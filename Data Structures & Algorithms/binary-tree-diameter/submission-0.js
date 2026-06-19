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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        this.maxDiameter = 0;
        this.dfs(root);
        return this.maxDiameter;
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    dfs(node) {
        if (node === null) return 0;

        const leftMax = this.dfs(node.left);
        const rightMax = this.dfs(node.right);

        this.maxDiameter = Math.max(this.maxDiameter, leftMax + rightMax);

        return 1 + Math.max(leftMax, rightMax);
    }
}
