class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let res = 0;
    let left = 0;
    let right = heights.length - 1;

    while (left < right) {
      const area = Math.min(heights[left], heights[right]) * (right - left);
      res = Math.max(res, area);

      if (heights[left] < heights[right]) left++;
      else right--;
    }

    return res;
  }
}
