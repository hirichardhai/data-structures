var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let obj = {};
  obj.counter = 0;
  obj.storage = {};

  _.extend(obj, stackMethods);

  return obj;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  pop: function() {
    let temp = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];

    if (this.counter) {
      this.counter--;
    }
    return temp;
  },
  size: function() {
    return this.counter;
  }
};


