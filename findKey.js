// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
// scan the object
// return the first key for which the callback returns a truthy value
const objKeys = Object.keys(object);
const objValues = Object.values(object);
for (let i = 0; i < objKeys.length; ++i) {  
// for (let i = objKeys.length - 1; i >=0; i--) {  // To loop from the end of the loop the other way around
    //console.log(objKeys[i] , " ", callback(objValues[i]));
    if (callback(objValues[i])) {
      console.log (objKeys[i]);
      return;
    }
  }
};

 
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
