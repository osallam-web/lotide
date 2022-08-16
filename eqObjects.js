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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const eqObjects = function(object1, object2) {
  const objkey1 = Object.keys(object1);
  const objkey2 = Object.keys(object2);
  //console.log(objkey1);
  //console.log(objkey2);
  if (objkey1.length !== objkey2.length) {
    console.log('false - not equal length');
    return false;
  } 
  for (let i = 0; i < objkey1.length; ++i) {
    if (Array.isArray(object1[objkey1[i]])) {
      if (!eqArrays(object1[objkey1[i]], object2[objkey1[i]])) {
        return false;
      }
    }
    else if (object1[objkey1[i]] !== object2[objkey1[i]]) {
      console.log('false comparison');
      return false;
    }  
  }
  
  console.log('true');
  return true;
};

//Testing
eqObjects(ab, ba); // => true
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, abc), false); // => false

module.exports = eqObjects;