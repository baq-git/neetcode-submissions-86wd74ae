class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    const cleanStr = s.replace(/[^a-z0-9 _]/gi, "").replaceAll(" ", "").toLowerCase();
    console.log(cleanStr)

    let left = 0;
    let right = cleanStr.length - 1;

    while (left < right) {
      if (cleanStr[left] != cleanStr[right]) {
        return false;
      }
      left++;
      right--;
    }

    return true;
  }
}
