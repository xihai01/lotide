// import modules for test
const assert = require("chai").assert;
const quickSort = require("../quickSort");

describe("#quickSort", () => {
  it("should work for distinct values: [6, 3, 7, 12, 0, 9]", () => {
    const expected = [0, 3, 6, 7, 9, 12];
    const input = [6, 3, 7, 12, 0, 9];
    quickSort(input, 0, input.length - 1);
    assert.deepEqual(input, expected);
  });

  it("should work for duplicate values: [1, 1, 1, 1]", () => {
    const expected = [1, 1, 1, 1];
    const input = [1, 1, 1, 1];
    quickSort(input, 0, input.length - 1);
    assert.deepEqual(input, expected);
  });

  it("should work for sorted array", () => {
    const expected = [1, 2, 3, 4];
    const input = [1, 2, 3, 4];
    quickSort(input, 0, input.length - 1);
    assert.deepEqual(input, expected);
  });

  it("should return [] for empty array", () => {
    const expected = [];
    const input = [];
    quickSort(input, 0, input.length - 1);
    assert.deepEqual(input, expected);
  });
});
