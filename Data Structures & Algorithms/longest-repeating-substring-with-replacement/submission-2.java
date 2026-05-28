class Solution {
    public int characterReplacement(String s, int k) {
        HashMap<Character, Integer> count = new HashMap<>();
        int left = 0, right = 0;
        int maxFrequency = 0;
        int res = 0;

        while (right < s.length()) {
            count.put(s.charAt(right), count.getOrDefault(s.charAt(right), 0) + 1);

            maxFrequency = Math.max(maxFrequency, count.get(s.charAt(right)));

            if (((right - left) + 1) - maxFrequency > k) {
                count.put(s.charAt(left), count.get(s.charAt(left)) - 1);
                left++;
            }

            res = Math.max(res, right - left + 1);

            right++;
        }

        return res;
    }
}
