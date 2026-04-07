class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const n = nums.length;
    let totalProdNoZero = 1;
    let zeroCount = 0;
    nums.forEach((v, i) => {
      if (v === 0) {
        zeroCount++;
      } else {
        totalProdNoZero *= v;
      }
    });

    if (zeroCount > 1) return new Array(n).fill(0);

    const result = new Array(n);

    nums.forEach((num, index) => {
      if (zeroCount > 0) {
        result[index] = num === 0 ? totalProdNoZero : 0;
      } else {
        result[index] = totalProdNoZero / num;
      }
    });

    return result;
  }
}
