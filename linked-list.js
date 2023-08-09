import Node from "./node.js";

let node1 = Node("uno");

const linkedList = () => {
  globalThis.head = null;
  return {
    append(value) {
      const newNode = Node(value);
      let pointer = head;
      if (head === null) head = newNode;
      while (pointer.nextNode != null) pointer = pointer.nextNode;
      pointer.nextNode = newNode;
    },
    prepend(value) {
      const newNode = Node(value);
      if (head === null) head = newNode;
      newNode.nextNode = head;
      head = newNode;
    },
    size() {
      let counter = 0;
      let pointer = globalThis.head;
      while (pointer != null) {
        pointer = pointer.nextNode;
        counter++;
      }
      return counter;
    },
    getHead() {
      return globalThis.head;
    },
    getTail() {
      let pointer = globalThis.head;
      while (pointer.next != null) pointer = pointer.nextNode;
      return pointer;
    },
    at(index) {
      if (!head) return null;
      let pointer = globalThis.head;
      for (let i = 0; i < index; i++) {
        pointer = pointer.nextNode;
      }
      return pointer;
    },
    pop() {
      let cur = globalThis.head;
      let prev;
      while (cur.nextNode != null) {
        prev = cur;
        cur = cur.nextNode;
      }
      prev.nextNode = null;
    },
    contians(value) {
      let pointer = globalThis.head;
      while (pointer.nextNode !== null) {
        if (pointer.value === value) return true;
        pointer = pointer.nextNode;
      }
      return pointer.value === value ? true : false;
    },
    contains(value) {
      if (!globalThis.head) return null;
      let index = 0;
      let pointer = globalThis.head;
      while (pointer.nextNode !== null) {
        if (pointer.value === value) return index;
        pointer = pointer.nextNode;
        index++;
      }
      return pointer.value === value ? index : null;
    },
    toString() {
      let tmp = globalThis.listHead;
      let stringList = "";
      while (tmp != null) {
        stringList += `(${tmp.value}) -> `;
        tmp = tmp.nextNode;
      }
      return (stringList += "null");
    },
  };
};

let list1 = linkedList();

console.log(list1.append("dos"));
