var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below

  someInstance.enqueue = function(value) {
<<<<<<< HEAD
    let size = someInstance.size();
    storage[size] = value;
=======
    var size = Object.keys(storage).length
    storage[size] = value
    return storage;
>>>>>>> 3b614d42c155400204617788a15b969a4c9159e7
  };
// 0 1 2 3, size = 4, 
  someInstance.dequeue = function() {
<<<<<<< HEAD
    let size = someInstance.size();
    let valueToDelete = storage[0];

    for (let i = 0; i < size; i += 1) {
      storage[i] = storage[
        +i + 1];
    };
    
    delete storage[size - 1];
    return valueToDelete;
=======
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
>>>>>>> 3b614d42c155400204617788a15b969a4c9159e7
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
