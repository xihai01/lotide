//import functions for tests
const assertArraysEqual = require('../assertArraysEqual');

//test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 1, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, -4]);
assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'c']);
assertArraysEqual([1, '2', 3], [1, '2', 3]);
assertArraysEqual([1, 2, 3], []);
assertArraysEqual([], [1, 2, 3]);
assertArraysEqual([], []);