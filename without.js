const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (actual.length !== expected.length) {
    return console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
    
  }
  console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
};
const words = ["hello", "world", "lighthouse"];
  
const without = function(source, itemsToRemove) {
  newArr =[];
  for (i=0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      newArr.push(source[i]);
    }
  }
  console.log(newArr);
};


// TEST CODE

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

