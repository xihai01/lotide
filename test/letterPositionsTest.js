//import functions for tests
const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('works for the string "lighthouse in the house"', () => {
    const expected = {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    };
    const sentence = 'lighthouse in the house';
    const result = letterPositions(sentence);
    assert.deepEqual(result, expected);
  });
  it('works for strings with special characters "$hello% w3r!!%"', () => {
    const expected = {
      '$': [0],
      h: [1],
      e: [2],
      l: [3, 4],
      o: [5],
      '%': [6, 13],
      w: [8],
      '3': [9],
      r: [10],
      '!': [11, 12]
    };
    const sentence = '$hello% w3r!!%';
    const result = letterPositions(sentence);
    assert.deepEqual(result, expected);
  });
  it('returns an empty object when the string is empty "      "', () => {
    const expected = {};
    const sentence = '      ';
    const result = letterPositions(sentence);
    assert.deepEqual(result, expected);
  });
  it('returns an empty object for a non-string input', () => {
    const expected = {};
    const sentence = 89;
    const result = letterPositions(sentence);
    assert.deepEqual(result, expected);
  });
});