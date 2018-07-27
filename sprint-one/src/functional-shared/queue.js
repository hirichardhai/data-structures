var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let storage = {};

  storage.front = 0;
  storage.end = 0;

  extend(storage, queueMethods);

  return storage;
};

function extend(obj, methods) {
  for (let key in methods) {
    obj[key] = methods[key];
  }
}

var queueMethods = {
  size: function() {
    return this.end - this.front >= 0 ? this.end - this.front : 0;
  },

  enqueue: function(value) {
    this[this.end] = value;
    this.end++;
  },

  dequeue: function() {
    let removeThis = this[this.front];
    delete this[this.front];
    this.front++;
    return removeThis;
  }
};
