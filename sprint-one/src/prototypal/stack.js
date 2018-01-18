var Stack = function() {
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
};

var extend = function(obj, methods) {
    for (var key in methods) {
    	obj[key] = methods[key];
    }
};