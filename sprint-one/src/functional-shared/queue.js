var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let storage = {};

  let someInstance = {};

  function extend(obj1, obj2) {
    for (var key in obj2) {
      obj1[key] = obj2[key];
    }
    return obj1;
  }
  
  return extend(someInstance, queueMethods);

};

var queueMethods = {
  size: function() {
    return Object.keys(this.storage).length;
  },
  enqueue: function(value) {

  },
  dequeue: function() {

  }
};


