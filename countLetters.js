const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(letters) {
  const results = {};
  let holder;
  for (let i = 0; i < letters.length; i++) {
    const alphabet = letters[i].toLowerCase().trim();
    if (alphabet) {
    if (results[alphabet]) {
      results[alphabet] = results[alphabet] + 1;
      }
      else {
        results[alphabet] = 1;
      }
    }
  }
  return results
};
//assertEqual(countLetters("Test"), { t: 2, e: 1, s: 1 }); 
console.log(countLetters("Test Phrase"));

module.exports = countLetters;