class Queue {
    constructor() {
      this.queue = [];
    }
  
    // Adds an element to the rear of the queue
    enqueue(element) {
      this.queue.push(element);
    }
  
    // Removes and returns the element at the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        return undefined; // Queue is empty
      }
      return this.queue.shift();
    }
  
    // Checks if the queue is empty
    isEmpty() {
      return this.queue.length === 0;
    }
  }
  
  // Example usage:
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.dequeue());    // Output: 1
  console.log(queue.dequeue());    // Output: 2
  console.log(queue.isEmpty());    // Output: false
  console.log(queue.dequeue());    // Output: 3
  console.log(queue.isEmpty());    // Output: true
  