class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
<<<<<<< HEAD
    this.storage = {
    }
  }

  size() {
    return Object.keys(this.storage).length;
  }

  pop() {
    let size = this.size() - 1;
    let value = this.storage[size];
    delete this.storage[size];
    return value;
  }

  push(value) {
    let size = this.size();
    this.storage[size] = value;
  }
}
=======
  	this.storage = {};
  }
  push(value) {
  	var size = Object.keys(this.storage).length;
  	this.storage[size] = value;
  }
  pop() {
  	var size = Object.keys(this.storage).length;
	var tempValue = this.storage[size - 1];
	delete this.storage[size - 1];
	return tempValue;
  }
  size() {
  	return Object.keys(this.storage).length;
  }

}
>>>>>>> 3b614d42c155400204617788a15b969a4c9159e7
