//import functions to test
const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
    const expected = [1, 2, 3, 4, 5, 6];
    const result = flatten([1, 2, [3, 4], 5, [6]]);
    assert.deepEqual(result, expected);
  });
  it('returns [1, 2, 3, 4, 5, 6] for [1, 2, 3, 4, 5, 6]', () => {
    const expected = [1, 2, 3, 4, 5, 6];
    const result = flatten([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(result, expected);
  });
  it('returns [] for []', () => {
    const expected = [];
    const result = flatten([]);
    assert.deepEqual(result, expected);
  });
  it('returns [2, 5] for [[], 2, [], 5, []]', () => {
    const expected = [2, 5];
    const result = flatten([[], 2, [], 5, []]);
    assert.deepEqual(result, expected);
  });
  it('returns [] for [[], [], []]', () => {
    const expected = [];
    const result = flatten([[], [], []]);
    assert.deepEqual(result, expected);
  });
});