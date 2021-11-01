//import functions for tests
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 1, 3]), false);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, -4]), false);
assertEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'c']), true);
assertEqual(eqArrays([1, '2', 3], [1, '2', 3]), true);
assertEqual(eqArrays([1, 2, 3], []), false);
assertEqual(eqArrays([], [1, 2, 3]), false);
assertEqual(eqArrays([], []), true);

//nested arrays
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); //true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); //false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); //false
assertEqual(eqArrays([[2, [3, 4]], [4, 5], 'hi'], [[2, [3, 4]], [4, 5], 'hi']), true); //true
assertEqual(eqArrays([[2, 3], [[4]]], [[2, 3], [[4, [3]]]]), false); //false