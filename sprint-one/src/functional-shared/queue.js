var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {};

  someInstance['front'] = 0;
  someInstance['count'] = 0;

  extend(someInstance, queueMethods);
  return someInstance;
};

function extend(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
}

var queueMethods = {
  size: function() {
    return Object.keys(this).length - 5;
  },
  enqueue: function(value) {
    this[this.count] = value;
    this.count++;
  },
  dequeue: function() {
    let returnValue = this[this.front];
    delete this[this.front];
    this.front++;
    return returnValue;
  }
};


