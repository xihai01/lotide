//import functions for tests
const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  //original array should not be mutated
  it('should not mutate the original array', () => {
    const data = ["hello", "world", "lighthouse"];
    const target = ["Lighthouse"];
    const result = without(data, target);
    const expected = ["hello", "world", "lighthouse"];
    assert.deepEqual(result, expected);
  });
  it('returns [2, 3] for [1, 2, 3] and [1]', () => {
    const data = [1, 2, 3];
    const target = [1];
    const result = without(data, target);
    const expected = [2, 3];
    assert.deepEqual(result, expected);
  });
  it('returns ["1", "2"] for ["1", "2", "3"] and [1, 2, "3"]', () => {
    const data = ['1', '2', '3'];
    const target = [1, 2, '3'];
    const result = without(data, target);
    const expected = ['1', '2'];
    assert.deepEqual(result, expected);
  });
  it('returns [] for [] and []', () => {
    const data = [];
    const target = [];
    const result = without(data, target);
    const expected = [];
    assert.deepEqual(result, expected);
  });
  it('returns original array if target is blank', () => {
    const data = [1, 2, 3];
    const target = [];
    const result = without(data, target);
    const expected = [1, 2, 3];
    assert.deepEqual(result, expected);
  });
  it('returns [] for an empty array and if target does not have related elements', () => {
    const data = [1, 3, 5];
    const target = ["h", 8, 10];
    const result = without(data, target);
    const expected = [1, 3, 5];
    assert.deepEqual(result, expected);
  });
});