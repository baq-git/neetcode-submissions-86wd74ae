/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    public Node copyRandomList(Node head) {
        HashMap<Node, Node> randomNodeMap = new HashMap<>();

        Node curr = head;
        while (curr != null) {
            randomNodeMap.put(curr, new Node(curr.val));
            curr = curr.next;
        }

        curr = head;
        while (curr != null) {
            Node cloneNode = randomNodeMap.get(curr);
            cloneNode.next = randomNodeMap.get(curr.next);
            cloneNode.random = randomNodeMap.get(curr.random);

            curr = curr.next;
        }

        return randomNodeMap.get(head);
    }
}
