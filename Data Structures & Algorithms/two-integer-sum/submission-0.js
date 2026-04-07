class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
 const temp = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const compliment = target - num;
    if (compliment in temp) {
      return [i, temp[compliment]];
    }
    temp[num] = i;
    }
  }
}
