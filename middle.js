// TEST/ASSERTION FUNCTIONS

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

// ACTUAL FUNCTION
const middle = function(array) {
  let i = array.length;
  let emptyArray = [];
  if (i === 1 || i === 2) {
    console.log(emptyArray);
  } else if (i % 2 != 0){
    emptyArray.push(array[((i - 1) / 2)]);
    console.log(emptyArray);
  }
  else if (i % 2 === 0){
    emptyArray.push(array[(i / 2) -1], array[(i / 2)]);
    console.log(emptyArray);
  }
}



//Testing
  

middle([1]); // => [] Array with 1 element
middle([1, 2]); // => [] Array with 2 elements

middle([1, 2, 3]) // => [2] an array containing a single middle element should returned for odd # arrays
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3] an array containing a single middle element should returned for odd # arrays
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
