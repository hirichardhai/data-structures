var Stack = function() {
  var someInstance = {};


  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
<<<<<<< HEAD
    let size = someInstance.size();
    storage[size] = value;
  };

  someInstance.pop = function() {
    let size = someInstance.size();
    let toBeDeleted = storage[size - 1];

    delete storage[size - 1];

    return toBeDeleted;
=======
    storage[Object.keys(storage).length] = value
    return storage;
  };

  someInstance.pop = function() {
    var tempStorage = storage[Object.keys(storage).length - 1];
    delete storage[Object.keys(storage).length - 1]
    return tempStorage;
>>>>>>> 3b614d42c155400204617788a15b969a4c9159e7
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
