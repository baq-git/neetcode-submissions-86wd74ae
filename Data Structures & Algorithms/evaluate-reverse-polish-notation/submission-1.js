class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    const stack = [];

    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === "+") {
        stack.push(stack.pop() + stack.pop());
      } else if (tokens[i] === "-") {
        const first = stack.pop();
        const last = stack.pop();
        stack.push(last - first);
      } else if (tokens[i] === "*") {
        stack.push(stack.pop() * stack.pop());
      } else if (tokens[i] === "/") {
        const first = stack.pop();
        const last = stack.pop();
        stack.push(Math.trunc(last / first));
      } else {
        stack.push(Number(tokens[i]));
      }
    }

    return stack[0];
  }
}
