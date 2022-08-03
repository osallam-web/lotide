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
    if (Array.isArray(object1[objkey1[i]])) { //Potentially will break because eqArrays doesnt exist in this file
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  console.log(`Example label: ${inspect(actual)}`)
  if (actual !== expected) {
    return console.log(`🛑 🛑 🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  /*for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return console.log(`🛑 🛑 🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }*/
    else {
  console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(eqObjects(ab, ba), true); // => assertion pass
assertObjectsEqual(eqObjects(ba, ab), true); // => assertion pass
assertObjectsEqual(eqObjects(abc, ba), true); // => assertion fail
assertObjectsEqual(eqObjects(abc, ab), false); // => assertion pass
assertObjectsEqual(eqObjects(abc, abc), false); // => assertion fail

