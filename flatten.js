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
}

function flatten(array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    let currentArray = array[i];
    if (!Array.isArray(currentArray)) {
        flattenedArray.push(currentArray);
        continue;
    }
    for (let j = 0; j < currentArray.length; j++) {
      flattenedArray.push(currentArray[j])
    }
  }
  return flattenedArray
}

// Testing
flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;