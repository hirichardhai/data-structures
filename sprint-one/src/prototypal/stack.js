var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  let obj = Object.create(stackMethods);
  obj.counter = 0;
  obj.storage = {};

  return obj;
};

var stackMethods = {
  pop: function() {
    let temp = this.storage[this.counter - 1];

    delete this.storage[this.counter - 1];

    if (this.counter) {
      this.counter--;
    }
    return temp;
  },
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  size: function() {
    return this.counter;
  }
};


