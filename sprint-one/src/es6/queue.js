class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
<<<<<<< HEAD
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
=======
  	this.storage = {};
  }

  enqueue(value) {
  	var size = Object.keys(this.storage).length;
    this.storage[size] = value
  }
  dequeue() {
  	var size = Object.keys(this.storage).length
    var tempValue = this.storage[0];
    delete this.storage[0];
    for (var i = 0; i < size; i++) {
      this.storage[i] = this.storage[i + 1]; 
      if (i === size - 1) {
        delete this.storage[i];
      }
    }
    return tempValue;
  }
  size() {
	return Object.keys(this.storage).length;
>>>>>>> 3b614d42c155400204617788a15b969a4c9159e7
  }
}