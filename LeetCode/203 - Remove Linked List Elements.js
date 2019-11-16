/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    while (head != null && head.val === val) {
        head = head.next;
    }
    var currentNode = head;
    while (currentNode != null && currentNode.next != null) {
        if (currentNode.next.val === val) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }
    return head;
};