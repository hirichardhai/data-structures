var Queue = function() {
<<<<<<< HEAD
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
=======
	var obj = {};
	extend(obj, queueMethods);
	return obj;
};

var extend = function(obj, methods) {
    for (var key in methods) {
    	obj[key] = methods[key];
    }
};

var queueMethods = {
	enqueue: function(value) {
		var size = Object.keys(this).length - 3;
		this[size] = value;
	},
	dequeue: function() {
	    var size = Object.keys(this).length - 3;
	    var tempValue = this[0];
	    delete this[0];
	    for (var i = 0; i < size; i++) {
	      this[i] = this[i + 1]; 
	      if (i === size - 1) {
	        delete this[i];
	      }
	    }
	    return tempValue;
	}, 
	size: function() {
	    return Object.keys(this).length - 3;
>>>>>>> 3b614d42c155400204617788a15b969a4c9159e7
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
