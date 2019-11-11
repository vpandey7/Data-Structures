/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
    var sum = 0;
    if (root === null) {
        return sum;
    }
    var currentNode = root;
    var queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
        currentNode = queue.shift();
        if (currentNode.val >= L && currentNode.val <= R) {
            sum = sum + currentNode.val;
        }
        if (currentNode.left !== null && currentNode.val > L) {
            queue.push(currentNode.left);
        }
        if (currentNode.right !== null && currentNode.val < R) {
            queue.push(currentNode.right);
        }
    }
    return sum;

};