class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
    let min;
    if (this.minStack.length === 0) {
      min = val;
    } else {
      min = Math.min(val, this.minStack[this.minStack.length - 1]);
    }
    this.minStack.push(min);
  }

  /**
   * @return {void}
   */
  pop() {
    this.minStack.pop();
    this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
