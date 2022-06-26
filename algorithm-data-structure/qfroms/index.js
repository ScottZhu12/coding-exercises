// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// create a queue from two stacks
class Queue {
  constructor() {
    // create two stacks
    this.first = new Stack();
    this.second = new Stack();
  }

  // push the element into the first stack
  add = (record) => {
    this.first.push(record);
  };

  remove = () => {
    // if first stack still contains elements
    // pushing elements from first stack to second stack
    // so that the order of the elements are reversed
    while (this.first.peek()) {
      const record = this.first.pop();
      this.second.push(record);
    }

    // this will be the first element pushed into first stack
    const record = this.second.pop();

    // after getting the element
    // redo the operation so that all elements are removed from second stack to the first stack
    // restore the first stack to get ready for the next remove operation
    while (this.second.peek()) {
      const record = this.second.pop();
      this.first.push(record);
    }

    return record;
  };
}

module.exports = Queue;
