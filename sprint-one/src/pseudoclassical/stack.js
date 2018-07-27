var Stack = function() {
<<<<<<< HEAD
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
=======
	this.x
};

Stack.prototype.push = function(value) {
	size = Object.keys(this).length;
	this[size] = value;
}

Stack.prototype.pop = function() {
	size = Object.keys(this).length;
	var tempValue = this[size - 1];
	delete this[size - 1];
	return tempValue;
}

Stack.prototype.size = function() {
	return Object.keys(this).length;
>>>>>>> 3b614d42c155400204617788a15b969a4c9159e7
}

