// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
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
  

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [1, 2, 4]); // => false

module.exports = assertArraysEqual;