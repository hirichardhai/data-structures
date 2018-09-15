var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      // we add this into an if statement since if we have 4[5[7],6[8]] and serach for 8, we will hit a hit node 7 and return a false and exit iterating to child node 6 to check for 8
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  } 
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addChild = O(1)
  contains = O(n)
  Tree = O(1)
 */