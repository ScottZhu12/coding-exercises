// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// step 1: both pointers are pointing at the first node
// step 2: fastforward the fast pointer into nth node in the list
// step 3: if fast.next does not exist, which means fast is at the last node
// step 4: slow pointer is currently pointing at the nth node away from the last node
const fromLast = (list, n) => {
  // step 1
  let slow = list.getFirst();
  let fast = list.getFirst();

  // step 2
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  // step 3
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // step 4
  return slow;
};

module.exports = fromLast;
