class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
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
  }
}