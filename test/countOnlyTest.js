//import functions to test
const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  //empty object
  it('returns {} given an empty array of names and { Bob: true }', () => {
    const names = [];
    const keys = { Bob: true };
    const actual = countOnly(names, keys);
    const expected = {};
    assert.deepEqual(actual, expected);
  });
  it('returns {Karl: 1} given ["John", "Bob", "Karl", "James"] and { Karl: true }', () => {
    const names = ["John", "Bob", "Karl", "James"];
    const keys = { Karl: true };
    const actual = countOnly(names, keys);
    const expected = { Karl: 1 };
    assert.deepEqual(actual, expected);
  });
  it('returns {Karl: 2} given ["Karl", "Bob", "Karl", "James"] and { Karl: true }', () => {
    const names = ["Karl", "Bob", "Karl", "James"];
    const keys = { Karl: true };
    const actual = countOnly(names, keys);
    const expected = { Karl: 2 };
    assert.deepEqual(actual, expected);
  });
  it('returns {Karl: 2, Bob: 3, Mike: 1} given ["Karl", "Bob", "Karl", "James", "Mike", "Bob", "Emily", "Bob"] and { Karl: true, Bob: true, Mike: true, Emily: false }', () => {
    const names = ["Karl", "Bob", "Karl", "James", "Mike", "Bob", "Emily", "Bob"];
    const keys = { Karl: true, Bob: true, Mike: true, Emily: false };
    const actual = countOnly(names, keys);
    const expected = { Karl: 2, Bob: 3, Mike: 1 };
    assert.deepEqual(actual, expected);
  });
  //no names exists
  it('returns {Karl: 2, Bob: 3, Mike: 1} given ["Bob", "James", "Mike", "Bob", "Emily", "Bob"] and { Karl: true, Bob: true, Mike: true, Emily: false }', () => {
    const names = ["Bob", "James", "Mike", "Bob", "Emily", "Bob"];
    const keys = { Karl: true, Bob: true, Mike: true, Emily: false };
    const actual = countOnly(names, keys);
    const expected = { Bob: 3, Mike: 1 };
    assert.deepEqual(actual, expected);
  });
});