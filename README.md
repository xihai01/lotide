# Lotide Library (In progress)
## About
Lotide is a copy of [Lodash](https://github.com/lodash/lodash) which is a modern JavaScript utility library delivering functions that makes working with arrays, strings, numbers, objects etc.. easier.
## Documentation
*function => (inputs) => outputs*
* assertEqual => (actual, expected) => true/false
* head => (array) => returns first element in array
* tail => (array) => slices off first element and returns rest of array
* eqArrays => (arr1, arr2) => returns a boolean indicating whether arr1 is equal to arr2 in value, type and length
* assertArraysEqual => (arr1, arr2) => prints an assertion message to console from comparing two arrays
* without => (arr1, arr2) => arr2 is an array of values to be removed from arr1. without() returns a new array of arr1 with values of arr2 removed
* flatten => (array) => outputs a single array of elements from a multi-dimensional array. **This function is still under construction. In the future, refactor so it uses recursion to handle infinite nested arrays**