class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {
      front: 0,
      back: 0
    };
  }

  enqueue(value) {
    this.storage[this.storage.back] = value;
    this.storage.back++;
  }

  dequeue() {
    let value = this.storage[this.storage.front];
    delete this.storage[this.storage.front];
    this.storage.front++;
    return value;
  }

  size() {
    return Object.keys(this.storage).length - 2;
  }
}