/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    var tempNode = new ListNode();
    var currentNode = tempNode;
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            currentNode.next = l1;
            l1 = l1.next;
        } else {
            currentNode.next = l2;
            l2 = l2.next;
        }
        currentNode = currentNode.next;
    }
    if (l1 != null) {
        currentNode.next = l1;
        l1 = l1.next;
    }
    if (l2 != null) {
        currentNode.next = l2;
        l2 = l2.next;
    }
    return tempNode.next;
};