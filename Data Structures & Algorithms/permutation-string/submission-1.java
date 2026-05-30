class Solution {
    public boolean checkInclusion(String s1, String s2) {
        if (s1.length() > s2.length())
            return false;

        Map<Character, Integer> countS1 = new HashMap<>();
        Map<Character, Integer> countWindow = new HashMap<>();

        for (int i = 0; i < s1.length(); i++) {
            char key = s1.charAt(i);
            countS1.put(key, countS1.getOrDefault(key, 0) + 1);
        }

        for (int i = 0; i < s1.length(); i++) {
            char key = s2.charAt(i);
            countWindow.put(key, countWindow.getOrDefault(key, 0) + 1);
        }

        if (countS1.equals(countWindow)) {
            return true;
        }

        int index = s1.length();
        while (index < s2.length()) {
            char newChar = s2.charAt(index);
            countWindow.put(newChar, countWindow.getOrDefault(newChar, 0) + 1);

            char oldChar = s2.charAt(index - s1.length());
            countWindow.put(oldChar, countWindow.getOrDefault(oldChar, 0) - 1);

            if (countWindow.get(oldChar) == 0) {
                countWindow.remove(oldChar);
            }

            if (countS1.equals(countWindow)) {
                return true;
            }

            index++;
        }

        return false;
    }
}