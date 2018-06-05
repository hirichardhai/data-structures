var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    let size = someInstance.size();
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    let size = someInstance.size();
    let valueToDelete = storage[0];

    for (let i = 0; i < size; i += 1) {
      storage[i] = storage[i + 1];
    };
    
    delete storage[size - 1];
    return valueToDelete;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
