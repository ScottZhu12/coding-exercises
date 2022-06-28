// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

// step 1: create a slow pointer and a fast pointer, both are initially pointing at the first node
// step 2: loop until the fast pointer reach the end of the list
// step 3: every iteration: slow pointer move one node forward, fast pointer move two nodes forward
// step 4: if two pointers are pointing at the same node, it means the list is a circular list
// step 5: if the loop break, that means next node is not defined, it is a non circular list
const circular = (list) => {
  // step 1
  let slow = list.getFirst();
  let fast = list.getFirst();

  // step 2
  while (fast.next && fast.next.next) {
    // step 3
    slow = slow.next;
    fast = fast.next.next;

    // step 4
    if (slow === fast) {
      return true;
    }
  }

  // step 5
  return false;
};

module.exports = circular;
