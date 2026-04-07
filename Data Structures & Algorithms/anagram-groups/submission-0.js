class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const hash = {};
    for (let i = 0; i < strs.length; i++) {
      const counts = new Array(26).fill(0);
      const s = strs[i]
      for (let j = 0; j < s.length; j++) {
        const element = s[j];
        counts[element.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
      }

      const key = counts.join(",");
      if (!hash[key]) {

      hash[key] = [];

      }

              hash[key].push(s);

    }

    return Object.values(hash);
  }
}
