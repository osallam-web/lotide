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


module.exports = tail;