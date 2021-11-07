//import functions for tests
const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it('returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]', () => {
    const expected = [ 1, 2, 5, 7, 2 ];
    const result = takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0);
    assert.deepEqual(result, expected);
  });
  it('returns ["Ive", "been", "to", "Hollywood"] for ["Ive", "been", "to", "Hollywood", ",", "Ive", "been", "to", "Redwood"]', () => {
    const expected = ["Ive", "been", "to", "Hollywood"];
    const result = takeUntil(["Ive", "been", "to", "Hollywood", ",", "Ive", "been", "to", "Redwood"], x => x === ',');
    assert.deepEqual(result, expected);
  });
  it('returns [1, 2, 5, 7, 2] for [1]', () => {
    const expected = [1];
    const result = takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x === 2);
    assert.deepEqual(result, expected);
  });
  it('returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2]', () => {
    const expected = [1, 2, 5, 7, 2];
    const result = takeUntil([1, 2, 5, 7, 2], x => x > 10);
    assert.deepEqual(result, expected);
  });
  it('returns [] for []', () => {
    const expected = [];
    const result = takeUntil([], x => x > 10);
    assert.deepEqual(result, expected);
  });
});