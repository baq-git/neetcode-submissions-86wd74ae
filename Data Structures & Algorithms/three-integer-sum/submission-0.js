class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    nums.sort((a, b) => a - b);

    const res = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) break;
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[left] + nums[right] + nums[i];
        if (sum > 0) {
          right--;
        } else if (sum < 0) {
          left++;
        } else if (sum === 0) {
          res.push([nums[left], nums[right], nums[i]]);
          left++;
          right--;

          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
        }
      }
    }

    return res;
  }
}
