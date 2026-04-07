class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const hashMap = {};
    for (const s of strs) {
      const counts = new Array(26).fill(0);
      for (let i = 0; i < s.length; i++) {
        const char = s[i];
        counts[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
      }

      const key = counts.join(",");
      if (!hashMap[key]) {
        hashMap[key] = [];
      }

      hashMap[key].push(s);
    }

    return Object.values(hashMap);
  }
}
