class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
  isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      // Skip non-alphanumeric characters from left
      if (!/[a-z0-9]/i.test(s[left])) {
        left++;
      } 
      // Skip non-alphanumeric characters from right
      else if (!/[a-z0-9]/i.test(s[right])) {
        right--;
      } 
      // Compare characters
      else {
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
          return false;
        }
        left++;
        right--;
      }
    }
    return true;
  }
}
