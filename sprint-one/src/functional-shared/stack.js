var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
	push: function(value) {
		this[Object.keys(this).length - 3] = value;
	},
	pop: function() {
		var tempStorage = this[Object.keys(this).length - 4];
	    delete this[Object.keys(this).length - 4]
	    return tempStorage;
	},
	size: function() {
		return Object.keys(this).length - 3;
	}
};

var extend = function(obj, methods) {
    for (var key in methods) {
    	obj[key] = methods[key];
    }
};