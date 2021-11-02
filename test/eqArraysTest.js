//import functions for tests
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

//test cases
/* 

//nested array
assertEqual(eqArrays([[2, 3], [[4]]], [[2, 3], [[4, [3]]]]), false); //false */

describe('#eqArrays', () => {
  it('returns true for [1, 2, 3] and [1, 2, 3]', () => {
    const actual = eqArrays([1, 2, 3], [1, 2, 3]);
    assert.isTrue(actual, 'arrays are expected to be equal');
  });
  it('returns false for [1, 2, 4] and [1, 1, 5]', () => {
    const actual = eqArrays([1, 2, 4], [1, 1, 5]);
    assert.isFalse(actual, 'arrays are expected to be different');
  });
  //different length, single level
  it('returns false for [2, 3] and [2, 3, 4]', () => {
    const actual = eqArrays([2, 3], [2, 3, 4]);
    assert.isFalse(actual, 'arrays are expected to be different');
  });
  //mixed array, single level
  it('returns true for [1, "h", 3] and [1, "h", 3]', () => {
    const actual = eqArrays([1, 'h', 3], [1, 'h', 3]);
    assert.isTrue(actual, 'arrays are expected to be equal');
  });
  //nested arrays
  it('returns true for [[2, 3], 4] and [[2, 3], 4]', () => {
    const actual = eqArrays([[2, 3], 4], [[2, 3], 4]);
    assert.isTrue(actual, 'arrays are expected to be equal');
  });
  it('returns false for [[2, 3], [4]] and [[2, 3], 4]', () => {
    const actual = eqArrays([[2, 3], [4]], [[2, 3], 4]);
    assert.isFalse(actual, 'arrays are expected to be different');
  });
  it('returns true for [[2, 3], [4]] and [[2, 3], [4, 5]]', () => {
    const actual = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]);
    assert.isFalse(actual, 'arrays are expected to be different');
  });
  it('returns true for [[2, [3, 4]], [4, 5], "hi"] and [[2, [3, 4]], [4, 5], "hi"]', () => {
    const actual = eqArrays([[2, [3, 4]], [4, 5], 'hi'], [[2, [3, 4]], [4, 5], 'hi']);
    assert.isTrue(actual, 'arrays are expected to be equal');
  });
  //empty arrays
  it('returns true for [] and []', () => {
    const actual = eqArrays([], []);
    assert.isTrue(actual, 'arrays are expected to be equal');
  });
  it('returns true for [[[[]]]] and [[[[]]]]', () => {
    const actual = eqArrays([[[[]]]], [[[[]]]]);
    assert.isTrue(actual, 'arrays are expected to be equal');
  });
  it('returns false for [[[]]] and [[[[]]]]', () => {
    const actual = eqArrays([[[]]], [[[[]]]]);
    assert.isFalse(actual, 'arrays are expected to be different');
  });
  it('returns false for [] and [1, 2, 3]', () => {
    const actual = eqArrays([], [1, 2, 3]);
    assert.isFalse(actual, 'arrays are expected to be different');
  });
  it('returns false for [[[[[1, 4]]]]] and [[[[[4]]]]]', () => {
    const actual = eqArrays([[[[[1, 4]]]]], [[[[[4]]]]]);
    assert.isFalse(actual, 'arrays are expected to be different');
  });
});

/* assertEqual(eqArrays([1, 2, 3], []), false);
assertEqual(eqArrays([], [1, 2, 3]), false);
assertEqual(eqArrays([], []), true); */
