var Queue = function() {
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