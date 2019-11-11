/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    let map1 = {};

    while (headA != null) {
        map1.add(headA);
        headA = headA.next;
    }
    while (headB != null) {
        if (map1.has(headB)) {
            return headB;
        }
        headB = headB.next;
    }
    return null;
};