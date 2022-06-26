// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// queue: first in first out
class Queue {
  constructor() {
    this.data = [];
  }

  // add new element to the start of the queue
  add = (record) => {
    this.data.unshift(record);
  };

  // remove element from the end of the queue
  remove = () => {
    return this.data.pop();
  };
}

module.exports = Queue;
