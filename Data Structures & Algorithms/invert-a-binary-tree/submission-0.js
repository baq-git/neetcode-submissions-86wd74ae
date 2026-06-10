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
     * @return {TreeNode}
     */
    invertTree(root) {
        this.dfs(root);

        return root;
    }

    /**
     * @param {TreeNode} node
     */
    dfs(node) {
        if (node === null) {
            return;
        }

        const temp = node.left;
        node.left = node.right;
        node.right = temp;

        this.dfs(node.left);
        this.dfs(node.right);
    }
}
