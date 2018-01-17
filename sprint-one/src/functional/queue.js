var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below

  someInstance.enqueue = function(value) {
    var size = Object.keys(storage).length
    storage[size] = value
    return storage;
  };
// 0 1 2 3, size = 4, 
  someInstance.dequeue = function() {
    var size = Object.keys(storage).length
    var tempValue = storage[0];
    delete storage[0];
    for (var i = 0; i < size; i++) {
      storage[i] = storage[i + 1]; 
      if (i === size - 1) {
        delete storage[i];
      }
    }
    return tempValue;
    // var tempStorage = storage[Object.keys(storage).length - 1];
    // delete storage[Object.keys(storage).length - 1]
    // return tempStorage;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
