class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {
    }
  }

  size() {
    return Object.keys(this.storage).length;
  }

  pop() {
    let size = this.size() - 1;
    let value = this.storage[size];
    delete this.storage[size];
    return value;
  }

  push(value) {
    let size = this.size();
    this.storage[size] = value;
  }
}