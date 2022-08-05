const assertEqual = require('../assertEqual');

const head = function(actual) {
  return actual[0];
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Omar");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);