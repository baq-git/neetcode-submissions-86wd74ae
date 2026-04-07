// import { MinHeap } from "./d/minHeap";
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  // NOTE: NAIVE WAY
  //
  // topKFrequent(nums, k) {
  //   const freq = {};
  //   for (let i = 0; i < nums.length; i++) {
  //     const n = nums[i];
  //     if (!freq[n]) {
  //       freq[n] = 0;
  //     }
  //
  //     freq[n] += 1;
  //   }
  //
  //   console.log(freq);
  //
  //   const sorted = Object.entries(freq)
  //     .sort((a, b) => {
  //       return b[1] - a[1];
  //     })
  //     .map((item) => {
  //       return +item[0];
  //     });
  //
  //   return sorted.slice(0, k);
  // }
  // NOTE: HEAP
  // topKFrequent(nums, k) {
  //   const count = {};
  //   for (let i = 0; i < nums.length; i++) {
  //     const n = nums[i];
  //     if (!count[n]) {
  //       count[n] = 0;
  //     }
  //
  //     count[n] += 1;
  //   }
  //
  //   const minHeap = new MinHeap();
  //
  //   Object.entries(count).forEach(([num, freq]) => {
  //     minHeap.push({ num: Number(num), freq });
  //     if (minHeap.size() > k) {
  //       minHeap.pop();
  //     }
  //   });
  //
  //   return minHeap.heap.map((item) => item.num);
  // }
  // NOTE: BUCKET SORT
  topKFrequent(nums, k) {
    const count = {};
    const freq = Array.from({ length: nums.length + 1 }, () => []);

    for (const n of nums) {
      count[n] = (count[n] || 0) + 1;
    }

    for (const n in count) {
      freq[count[n]].push(n);
    }

    const result = [];
    for (let i = freq.length - 1; i > 0; i--) {
      for (const n of freq[i]) {
        result.push(n);
        if (result.length === k) {
          return result;
        }
      }
    }
  }
}
