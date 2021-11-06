//import functions for tests
const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it('returns (key) "drama" for (value) "The Wire"', () => {
    const object = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      crap: "The Expanse",
      drama:  "The Wire"
    };
    const result = findKeyByValue(object, "The Wire");
    assert.deepEqual(result, 'drama');
  });
  it('returns undefined if value does not exist', () => {
    const object = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      crap: "The Expanse",
      drama:  "The Wire"
    };
    const result = findKeyByValue(object, "Pokemon");
    assert.deepEqual(result, undefined);
  });
  it('returns undefined if object is empty', () => {
    const object = {};
    const result = findKeyByValue(object, "The Wire");
    assert.deepEqual(result, undefined);
  });
});