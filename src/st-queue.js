const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.head = null;
  }

  enqueue(value) {
    //  проверяем есть ли елементы в очереди
    if (this.head) {
      //  если елемены были, то переходим в конец очереди по ссылкам
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      //  присваиваем значение последнего елемента value
      current.next = new ListNode(value);
    } else {
      //  если елементов не было, то создаем новый елемент с value
      this.head = new ListNode(value);
    }
  }

  dequeue() {
    //   проверяем, есть ли в очереди елементы
    if (this.head) {
      //   перезаписываем начало очереди на 1 шаг next
      let current = this.head;
      this.head = current.next;
      return current.value;
    }
    return;
  }

  getUnderlyingList() {
    //   показываем очередь
    return this.head;
  }
};
