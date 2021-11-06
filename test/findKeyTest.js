//import functions for testing
const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', () => {
  it('returns "noma"', () => {
    const object = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const result = findKey(object, x => x.stars === 2);
    assert.deepEqual(result, 'noma');
  });
  it('returns the first key found out of multiple keys with same value', () => {
    const object = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 3 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 3 },
      "Akelarre":  { stars: 3 }
    };
    const result = findKey(object, x => x.stars === 3);
    assert.deepEqual(result, 'Akaleri');
  });
  it('returns undefined if no key exists', () => {
    const object = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const result = findKey(object, x => x.stars === 0);
    assert.deepEqual(result, undefined);
  });
  it('returns undefined if object is empty', () => {
    const object = {};
    const result = findKey(object, x => x.stars === 5);
    assert.deepEqual(result, undefined);
  });
});