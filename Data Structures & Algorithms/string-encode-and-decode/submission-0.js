class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = "";
    for (let i = 0; i < strs.length; i++) {
      res += strs[i].length + "," + strs[i];
    }

    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const result = [];
    let i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== ",") {
        j++;
      }
      let len = parseInt(str.substring(i, j));
      i = j + 1;
      j = i + len;
      result.push(str.substring(i, j));
      i = j;
    }

    return result;
  }
}
