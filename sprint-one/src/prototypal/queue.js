var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let obj = Object.create(queueMethods);
  obj.tail = 0;
  obj.head = 0;
  obj.storage = {};

  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.tail] = value;
    this.tail++;
    return this.storage;
  },
  dequeue: function() {
    let temp = this.storage[this.head];
    delete this.storage[this.head];

    if (this.tail !== this.head) {
      this.head++;
    }

    return temp;
  },
  size: function() {
    return this.tail - this.head;
  }
};


