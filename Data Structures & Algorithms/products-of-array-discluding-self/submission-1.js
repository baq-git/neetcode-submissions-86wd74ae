class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n);


    for (let i = 0; i < n; i++) {
      let curr = 1;
      for (let k = 0; k < n; k++) {
        if (i !== k) {
          curr = curr * nums[k];
        }
      }
        res[i] = curr
    }

    return res;
  }
}
