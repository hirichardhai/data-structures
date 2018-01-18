var Queue = function() {
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
  }
}


