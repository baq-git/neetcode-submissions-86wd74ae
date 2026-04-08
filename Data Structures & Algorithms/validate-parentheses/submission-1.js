class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const bracket = {
      ")": "(",
      "]": "[",
      "}": "{",
    };

    const stack = [];
    for (const c of s) {
      if (bracket[c]) {
        if (stack.length > 0 && stack[stack.length - 1] === bracket[c]) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(c);
      }
    }

    if (stack.length) return false;
    else return true;
  }
}
