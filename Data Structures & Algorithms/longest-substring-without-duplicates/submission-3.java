class Solution {
    public int lengthOfLongestSubstring(String s) {
        int left = 0, right = 0, maxLength = 0;

        HashMap<Character, Integer> hash = new HashMap<>();

        while (right < s.length()) {
            char key = s.charAt(right);
            if (hash.containsKey(key)) {
                left = Math.max(hash.get(key) + 1, left);
            }
            hash.put(key, right);
            maxLength = Math.max(maxLength, right - left + 1);

            right++;
        }

        return maxLength;
    }
}
