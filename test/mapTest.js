//import functions to test
const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  it('returns ["g", "c", "t", "m", "t"] for ["ground", "control", "to", "major", "tom"]', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results = map(words, word => word[0]);
    const expected = ["g", "c", "t", "m", "t"];
    assert.deepEqual(results, expected);
  });
  it('returns [0, 2, 4, 6, 12, 16] for [0, 1, 2, 3, 6, 8]', () => {
    const num = [0, 1, 2, 3, 6, 8];
    const results = map(num, x => x * 2);
    const expected = [0, 2, 4, 6, 12, 16];
    assert.deepEqual(results, expected);
  });
  it('returns ["bob", "emily"] for [{name: "bob", age: 23}, {name: "emily", age: 15}]', () => {
    const obj = [{name: "bob", age: 23}, {name: "emily", age: 15}];
    const results = map(obj, x => {
      return x.name;
    });
    const expected = [ 'bob', 'emily' ];
    assert.deepEqual(results, expected);
  });
});