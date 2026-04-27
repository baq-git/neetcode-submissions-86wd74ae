class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;

    let top = 0;
    let bot = ROWS - 1;

    while (top <= bot) {
      const row = Math.floor((top + bot) / 2);
      if (target > matrix[row][COLS - 1]) {
        top = row + 1;
      } else if (target < matrix[row][0]) {
        bot = row - 1;
      } else {
        break;
      }
    }

    if (!(top <= bot)) {
      return false;
    }

    const row = Math.floor((top + bot) / 2);
    const arr = matrix[row];

    return this.binarySearch(arr, target);
  }

  /**
   * @param {number[]} array
   * @param {number} target
   * @return {boolean}
   */

  binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);

      if (array[middle] === target) {
        return true;
      }

      if (target > array[middle]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
    return false;
  }
}
