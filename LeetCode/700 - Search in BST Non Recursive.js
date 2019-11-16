/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    if (root === null) return null

    let currentNode = root;

    while (currentNode) {
        if (val < currentNode.val) {
            currentNode = currentNode.left;
        } else if (val > currentNode.val) {
            currentNode = currentNode.right;
        } else if (val === currentNode.val) {
            return currentNode;
        }

    }
    return null;

};