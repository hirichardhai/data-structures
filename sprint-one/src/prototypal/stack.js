var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = Object.create(stackMethods);

  return instance;
};

var stackMethods = {
  size: function() {
    return Object.keys(this).length;
  },
  pop: function() {
    let value = this[this.size() - 1];
    delete this[this.size() - 1];
    return value;
  },
  push: function(value) {
    let size = this.size();
    this[size] = value;
  }
};


