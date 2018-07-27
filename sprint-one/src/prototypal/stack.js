var Stack = function() {
<<<<<<< HEAD
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
=======
	var obj = Object.create(stackMethods);

	return obj;
};

var stackMethods = {
	push: function(value) {
		this[Object.keys(this).length] = value;
	},
	pop: function() {
		var tempStorage = this[Object.keys(this).length - 1];
	    delete this[Object.keys(this).length - 1]
	    return tempStorage;
	},
	size: function() {
		return Object.keys(this).length;
	}
>>>>>>> 3b614d42c155400204617788a15b969a4c9159e7
};

var stack = Stack();

stack.pop()