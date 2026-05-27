/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public void reorderList(ListNode head) {
        if (head == null || head.next == null)
            return;

        ListNode slow = head, fast = head;
        ListNode prevToMid = null;

        while (fast != null && fast.next != null) {
            prevToMid = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode mid = slow;
        prevToMid.next = null;

        ListNode prevReserve = null;
        while (mid != null) {
            ListNode temp = mid.next;
            mid.next = prevReserve;
            prevReserve = mid;
            mid = temp;
        }

        ListNode p1 = head;
        ListNode p2 = prevReserve;

        while (p2 != null) {
            ListNode temp1 = p1.next;
            ListNode temp2 = p2.next;

            p1.next = p2;
            if (temp1 == null)
                break;

            p2.next = temp1;

            p1 = temp1;
            p2 = temp2;
        }
    }
}
