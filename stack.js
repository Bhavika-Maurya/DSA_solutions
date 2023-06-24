class Stack {
    constructor() {
      this.stack = [];
    }
  
    // Pushes an element onto the top of the stack
    push(element) {
      this.stack.push(element);
    }
  
    // Removes and returns the topmost element from the stack
    pop() {
      if (this.isEmpty()) {
        return undefined; // Stack is empty
      }
      return this.stack.pop();
    }
  
    // Checks if the stack is empty
    isEmpty() {
      return this.stack.length === 0;
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log(stack.pop());    // Output: 3
  console.log(stack.pop());    // Output: 2
  console.log(stack.isEmpty());    // Output: false
  console.log(stack.pop());    // Output: 1
  console.log(stack.isEmpty());    // Output: true
  