class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
      const numLeft = numbers[left];
      const numRight = numbers[right];
      if (numLeft + numRight === target) {
        return [left + 1, right + 1];
      }

      if (numLeft + numRight < target) {
        left++;
      }

      if (numLeft + numRight > target) {
        right--;
      }
    }
  }
}
