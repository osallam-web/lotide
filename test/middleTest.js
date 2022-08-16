const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns ['3', '5'] for ['1', '3', '5', '7']", () => {
    assert.deepEqual(middle(['1', '3', '5', '7']), ['3', '5']); 
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []); 
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });
});