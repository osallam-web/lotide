const tail = function(words) {
  /*let empty = [];
  let newArr = [];
  if (words.length = 1) {
    return empty;
  } else if (words === empty) {
    return empty;
  } else {
    newArr = words.shift();*/
    return words.slice(1, words.length);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!