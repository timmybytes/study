export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    // O(1) constant
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode; // inserted node becomes head of list
    this.length++; // list length increases by 1 after inserting new node
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  print() {
    let output = '';
    let current = this.head;
    while (current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }
    console.log(`${output}null`);
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// Helper function
LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};
