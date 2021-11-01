//import functions for test
const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns an empty array for []', () => {
    const actual = tail([]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
  it('returns an empty array for [8]', () => {
    const actual = tail([8]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
  it('returns [3, 4] for [1, 3, 4]', () => {
    const actual = tail([1, 3, 4]);
    const expected = [3, 4];
    assert.deepEqual(actual, expected);
  });
  it('returns ["L", "H"] for ["O", "L", "H"]', () => {
    const actual = tail(['O', 'L', 'H']);
    const expected = ['L', 'H'];
    assert.deepEqual(actual, expected);
  });
});