var Stack = function() {
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
}

