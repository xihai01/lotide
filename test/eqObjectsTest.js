//import functions for tests
const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  //empty objects
  it('returns true for {} and {}', () => {
    const o1 = {};
    const o2 = {};
    assert.equal(eqObjects(o1, o2), true);
  });
  //objects with primitives
  it('returns true for { a: 1, b: 2 } and { b: 2, a: 1 }', () => {
    const o1 = { a: 1, b: 2 };
    const o2 = { b: 2, a: 1 };
    assert.equal(eqObjects(o1, o2), true);
  });
  it('returns false for { a: "1", b: "2" } and { a: "1", b: "2", c: "3" }', () => {
    const o1 = { a: 1, b: 2 };
    const o2 = { a: "1", b: "2", c: "3" };
    assert.equal(eqObjects(o1, o2), false);
  });
  //objects with arrays
  it('returns true for { c: "1", d: ["2", 3] } and { d: ["2", 3], c: "1" }', () => {
    const o1 = { c: "1", d: ["2", 3] };
    const o2 = { d: ["2", 3], c: "1" };
    assert.equal(eqObjects(o1, o2), true);
  });
  it('returns false for { c: "1", d: ["2", 3] } and { c: "1", d: ["2", 3, 4] }', () => {
    const o1 = { c: "1", d: ["2", 3] };
    const o2 = { c: "1", d: ["2", 3, 4] };
    assert.equal(eqObjects(o1, o2), false);
  });
  //nested objects and arrays
  it('returns true for { a: { z: 1, x: {o: 3} }, b: 2 } and { a: { z: 1, x: {o: 3} }, b: 2 }', () => {
    const o1 = { a: { z: 1, x: {o: 3} }, b: 2 };
    const o2 = { a: { z: 1, x: {o: 3} }, b: 2 };
    assert.equal(eqObjects(o1, o2), true);
  });
  it('returns false for { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }', () => {
    const o1 = { a: { y: 0, z: 1 }, b: 2 };
    const o2 = { a: { z: 1 }, b: 2 };
    assert.equal(eqObjects(o1, o2), false);
  });
  it('returns false for { a: { y: 0, z: 1 }, b: [2, 3, 4] } and { a: { z: 1 }, b: 2 }', () => {
    const o1 = { a: { y: 0, z: 1 }, b: [2, 3, 4] };
    const o2 = { a: { z: 1 }, b: 2 };
    assert.equal(eqObjects(o1, o2), false);
  });
  it('returns true for { a: { y: 0, z: 1 }, b: [2, 3, 4] } and { a: { z: 1 }, b: [2, 3, 4] }', () => {
    const o1 = { a: { y: 0, z: 1 }, b: [2, 3, 4] };
    const o2 = { a: { y: 0, z: 1 }, b: [2, 3, 4] };
    assert.equal(eqObjects(o1, o2), true);
  });
});