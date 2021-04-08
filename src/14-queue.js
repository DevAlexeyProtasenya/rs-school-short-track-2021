const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.storage = null;
    this.size = 0;
  }

  get size() {
    let size = 0;
    let current = this.storage;
    while (current != null) {
      size++;
      current = current.next;
    }
    return size;
  }

  enqueue(element) {
    const current = new ListNode(element);
    current.next = this.storage;
    this.storage = current;
  }

  dequeue() {
    let current = this.storage;
    let result = 0;
    if (current === null) {
      throw new Error('Not enaugh elements!');
    }
    if (current.next === null) {
      result = current.value;
      current = null;
    } else {
      while (current.next !== null) {
        if (current.next.next === null) {
          result = current.next.value;
          current.next = null;
          break;
        } else {
          current = current.next;
        }
      }
    }
    return result;
  }
}

module.exports = Queue;
