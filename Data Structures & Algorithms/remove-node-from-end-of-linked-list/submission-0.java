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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        if (head == null)
            return null;

        ListNode point1 = head;
        int lengthOfListNode = 0;
        while (point1 != null) {
            lengthOfListNode += 1;
            point1 = point1.next;
        }

        ListNode point2 = head;

        if (n == lengthOfListNode) return head.next;

        for (int i = 0; i < lengthOfListNode; i++) {
            if (i == lengthOfListNode - n - 1) {
                point2.next = point2.next.next;
                break;
            }

            point2 = point2.next;
        }

        return head;
    }
}
