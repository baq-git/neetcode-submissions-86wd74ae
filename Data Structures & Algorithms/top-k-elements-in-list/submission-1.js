class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
   const count = {};
    for (let i = 0; i < nums.length; i++) {
      const n = nums[i];
      if (!count[n]) {
        count[n] = 0;
      }

      count[n] += 1;
    }

    const minHeap = new MinHeap();

    Object.entries(count).forEach(([num, freq]) => {
      minHeap.push({ num: Number(num), freq });
      if (minHeap.size() > k) {
        minHeap.pop();
      }
    });

    return minHeap.heap.map((item) => item.num);
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);

      if (this.heap[index].freq < this.heap[parentIndex].freq) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex].freq < this.heap[smallerChildIndex].freq
      ) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[index].freq > this.heap[smallerChildIndex].freq) {
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      } else {
        break;
      }
    }
  }

  push(node) {
    this.heap.push(node);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap[0];
  }
}
