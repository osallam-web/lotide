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

/* results = {
  h: [0]
  e: [1]
  l: [2, 3]
  o: [4]
}*/

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]] === undefined) {
        results[sentence[i]] = [i];
      }
      else {
        results[sentence[i]].push(i);
      }
    }
  }
    console.log(results);
    return results;
  }
  
  
// TEST CODE
letterPositions("Hello");
letterPositions("Hello Omar");
assertArraysEqual(letterPositions("hello"), [1]);
assertArraysEqual(letterPositions("hello"), "hello");
