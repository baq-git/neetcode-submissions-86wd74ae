class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const freq = {};
    for (let i = 0; i < nums.length; i++) {
      const n = nums[i];
      if (!freq[n]) {
        freq[n] = 0;
      }

      freq[n] += 1;
    }

    console.log(freq);

    const sorted = Object.entries(freq)
      .sort((a, b) => {
        return b[1] - a[1];
      })
      .map((item) => {
        return +item[0];
      });

    return sorted.slice(0, k);
  }
}
