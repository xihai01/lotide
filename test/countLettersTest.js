//import functions for tests
const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for "lighthouse in the house"', () => {
    const actual = countLetters('lighthouse in the house');
    const expected = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
    assert.deepEqual(actual, expected);
  });
  it('returns { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 } for "abbcccddddeeeeeffffffggggggg"', () => {
    const actual = countLetters('abbcccddddeeeeeffffffggggggg');
    const expected = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 };
    assert.deepEqual(actual, expected);
  });
  it('returns {e: 1} for "                     e"', () => {
    const actual = countLetters('                e');
    const expected = { e: 1 };
    assert.deepEqual(actual, expected);
  });
});