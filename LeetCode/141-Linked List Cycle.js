/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

 // slow and fast pointer method O(1) memory
var hasCycle = function(head) {
    if(head===null) return head;
    var slow = head;
    var fast = head.next;
    while(slow!=fast){
        if(fast===null || fast.next ===null){
            return false;
        }
        slow=slow.next;
        fast= fast.next.next;
    }
    return true;  
};


// Hastable method O(n) memory
var hasCycle = function(head) {
    if(head===null) return head;
    var map = new Map();
    while(head!=null){
        if(map.has(head)){
            return true;
        }else{
            map.add(head);
        }
        head = head.next;
    }
    return false;
};