var Queue = function() {
<<<<<<< HEAD
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {
    front: 0,
    back: 0
  };

};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length - 2;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.storage.back] = value;
  this.storage.back++;
}

Queue.prototype.dequeue = function() {
  let value = this.storage[this.storage.front];
  delete this.storage[this.storage.front];
  this.storage.front++;
  return value;
}

let test = new Queue();

test.size();

test = {
  storage: {
    front: 0,
    back: 0
  }
}
=======
	this.x
};

Queue.prototype.enqueue = function(value) {
	size = Object.keys(this).length;
    this[size] = value
};

Queue.prototype.dequeue = function() {
	var size = Object.keys(this).length
    var tempValue = this[0];
    delete this[0];
    for (var i = 0; i < size; i++) {
      this[i] = this[i + 1]; 
      if (i === size - 1) {
        delete this[i];
      }
    }
    return tempValue;
};

Queue.prototype.size = function() {
	return Object.keys(this).length;
}
>>>>>>> 3b614d42c155400204617788a15b969a4c9159e7
