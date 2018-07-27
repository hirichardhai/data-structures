var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
}

Stack.prototype.pop = function() {
  let size = this.size() - 1;
  let value = this.storage[size];
  delete this.storage[size];
  return value;
}

Stack.prototype.push = function(value) {
  let size = this.size();
  this.storage[size] = value;
}

