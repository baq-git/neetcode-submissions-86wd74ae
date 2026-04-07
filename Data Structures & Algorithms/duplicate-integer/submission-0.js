class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
            const seen = {};
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      if (seen[element]) {
        return true;
      } else {
        seen[element] = true;
      }
    }

    return false;
  }

}
