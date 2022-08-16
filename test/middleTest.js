const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//Testing
  
middle([1]); // => [] Array with 1 element
middle([1, 2]); // => [] Array with 2 elements

middle([1, 2, 3]) // => [2] an array containing a single middle element should returned for odd # arrays
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3] an array containing a single middle element should returned for odd # arrays
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]