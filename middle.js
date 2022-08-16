
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

module.exports = middle;