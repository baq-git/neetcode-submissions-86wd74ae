class LRUCache {
    private int cap;
    private HashMap<Integer, Node> cache;
    private Node left;
    private Node right;

    public LRUCache(int capacity) {
        this.cap = capacity;
        this.cache = new HashMap<>(capacity);

        this.left = new Node(0, 0);
        this.right = new Node(0, 0);

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    public void remove(Node node) {
        Node prev = node.prev;
        Node next = node.next;

        prev.next = next;
        next.prev = prev;
    }

    public void insert(Node node) {
        Node prev = this.right.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.right;
        this.right.prev = node;
    }

    public int get(int key) {
        if (this.cache.containsKey(key)) {
            Node curr = this.cache.get(key);

            remove(curr);
            insert(curr);

            return curr.val;
        }

        return -1;
    }

    public void put(int key, int value) {
        if (this.cache.containsKey(key)) {
            Node curr = this.cache.get(key);
            remove(curr);
        }

        Node newNode = new Node(key, value);
        cache.put(key, newNode);
        insert(newNode);

        if (cache.size() > cap) {
            Node lru = this.left.next;
            remove(lru);
            cache.remove(lru.key);
        }
    }

    class Node {
        int key;
        int val;

        Node prev;
        Node next;

        public Node(int key, int val) {
            this.key = key;
            this.val = val;
            this.prev = null;
            this.next = null;
        }
    };
}
