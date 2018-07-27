var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = {};

  extend(instance, stackMethods);

  return instance;
};

let extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
}

var stackMethods = {
  size: function() {
    return Object.keys(this).length - 3;
  },
  push: function(value) {
    let size = this.size();
    this[size] = value;
  },
  pop: function() {
    let value = this[this.size() - 1];
    delete this[this.size() - 1];
    return value;
  }
};


