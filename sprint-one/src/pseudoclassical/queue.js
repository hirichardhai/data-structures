var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {
    front: 0,
    back: 0
  };

};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length - 2;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.storage.back] = value;
  this.storage.back++;
}

Queue.prototype.dequeue = function() {
  let value = this.storage[this.storage.front];
  delete this.storage[this.storage.front];
  this.storage.front++;
  return value;
}

let test = new Queue();

test.size();

test = {
  storage: {
    front: 0,
    back: 0
  }
}
