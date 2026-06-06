class Solution {
    public int findDuplicate(int[] nums) {
        int seen[] = new int[nums.length - 1];
        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];
            if (seen[num - 1] == 1) {
                return num;
            } else {
                seen[num - 1] = 1;
            }
        }

        return -1;
    }
}
