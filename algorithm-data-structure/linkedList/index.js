// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  // if the next argument is not provided, default to null
  // which means this is the tail node (last node in the list)
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  // create the list, setup the head reference to the first node in the list
  // by default, when the list is created, it should be empty
  constructor() {
    this.head = null;
  }

  // method to initialize the list: create the head (first node in the list)
  insertFirst = (data) => {
    // setp 1: create a node, note if there is a head already, make sure the next property of the newly created node points to the existing node
    const node = new Node(data, this.head);
    // step 2: update the head reference to the newly created node
    this.head = node;
  };

  // method to return how many nodes are there in the list
  size = () => {
    // setup the node reference to the starting node in the list
    // a counter to count number of nodes
    let node = this.head;
    let numNodes = 0;

    // loop until no more nodes in the list
    while (node) {
      // update counter
      // update node reference to the next existing node
      numNodes++;
      node = node.next;
    }

    return numNodes;
  };

  // method to return the first node in the list
  getFirst = () => {
    // head reference to the first node
    return this.head;
  };

  // method to return the last node in the list
  getLast = () => {
    // reference node to head (first node)
    let node = this.head;

    // if head is not null
    // loop through the list
    while (node) {
      // if next node still exists
      // update the current node to next node
      if (node.next) {
        node = node.next;
      } else {
        // if there is no more node left, next node is null
        // the current node is the last node, break out of the loop
        break;
      }
    }

    return node;
  };

  // method to clear the list
  clear = () => {
    // reference the head (first node) to null
    // the list is empty now
    this.head = null;
  };

  // method to remove the head (first node) from the list
  removeFirst = () => {
    // if head does not exist
    // there is no node to remove
    if (!this.head) {
      return;
    }

    // if head exists, reassign head to the second node in the list
    this.head = this.head.next;
  };

  // method to remove last node from the list
  removeLast = () => {
    // if head does not exist
    // there is no node to remove
    if (!this.head) {
      return;
    }

    // one reference to the current node
    // one reference to the next node
    let prevNode = this.head;
    let node = prevNode.next;

    // edge case: list has one node only
    // remove head node
    if (!node) {
      this.head = null;

      return;
    }

    // if node.next is defined, it's not the end of the list
    // when node.next does not exist, prevNode is pointing at the second last node
    while (node.next) {
      prevNode = node;
      node = prevNode.next;
    }

    // assign prevNode.next to null: remove reference to the last node
    prevNode.next = null;
  };

  // method to insert a node to the tail of the list
  insertLast = (data) => {
    // create a new node for the last node to be inserted
    const node = new Node(data);

    // if list is empty, first node is newly created node
    if (!this.head) {
      this.head = node;
    }

    // get the current last node in the list
    // point the current last node to the newly created node
    const lastNode = this.getLast();
    lastNode.next = node;
  };

  // method to retrive the node at specified position
  getAt = (index) => {
    // if head does not exist
    // there is no node to get
    if (!this.head) {
      return null;
    }

    let node = this.head;
    let counter = 0;

    // loop until the entire list is checked
    while (node) {
      // found node at the specified position
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    // node not found, return null
    return null;
  };

  // method to remove the node at specified position
  removeAt = (index) => {
    // if head does not exist
    // there is no node to remove
    if (!this.head) {
      return;
    }

    // case to remove head (first node)
    if (index === 0) {
      this.head = this.head.next;
    }

    // to remove a specific node, point the previous node to the next node
    const prevNode = this.getAt(index - 1);
    const nextNode = this.getAt(index + 1);

    // handle edge case: index out of bounds and ensure previous node is not the last node
    if (!prevNode || !prevNode.next) {
      return;
    }

    prevNode.next = nextNode;
  };

  // method to insert a node at a specified position
  insertAt = (data, index) => {
    // if list is empty, insert node at head position
    if (!this.head) {
      this.head = new Node(data);

      return;
    }

    // insert at head position
    if (index === 0) {
      this.head = new Node(data, this.head);

      return;
    }

    // previous node points at newly inserted node
    // newly inserted node points at next node
    const prevNode = this.getAt(index - 1);
    const newNode = new Node(data, prevNode.next);

    // edge case: index out of bounds, insert new node at the tail position
    if (!prevNode) {
      const lastNode = this.getLast();
      lastNode.next = new Node(data);

      return;
    }

    prevNode.next = newNode;
  };
}

module.exports = { Node, LinkedList };
