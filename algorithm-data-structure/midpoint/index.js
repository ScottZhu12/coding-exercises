// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// step 1: create a slow pointer and a fast pointer, both are initially pointing at the first node
// step 2: loop until the fast pointer reach the end of the list
// step 3: every iteration: slow pointer move one node forward, fast pointer move two nodes forward
// step 4: when the loop break, slow pointer will be pointing at the middle node
const midpoint = (list) => {
  // step 1
  let slow = list.getFirst();
  let fast = list.getFirst();

  // step 2
  while (fast.next && fast.next.next) {
    // step 3
    slow = slow.next;
    fast = fast.next.next;
  }

  // step 4
  return slow;
};

module.exports = midpoint;
