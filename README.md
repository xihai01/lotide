# Lotide Library (In progress)
A mini clone of the beloved Lodash library.
## Disclaimer
**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software** 
## About
Lotide is a copy of [Lodash](https://github.com/lodash/lodash) which is a modern JavaScript utility library delivering functions that makes working with arrays, strings, numbers, objects etc.. easier.
## Usage
**Install it:**

`npm install @keqingthethundercat/lotide`

**Require it:**

`const _ = require('@keqingthethundercat/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation
The following functions are currently implemented:

*function => (inputs) => outputs*
* assertEqual => (actual, expected) => true/false string comparisons
* head => (array) => returns first element in array
* tail => (array) => slices off first element and returns rest of array
* eqArrays => (arr1, arr2) => returns a boolean indicating whether arr1 is equal to arr2 in value, type and length. Can supported nested arrays
* assertArraysEqual => (arr1, arr2) => prints an assertion message to console from comparing two arrays
* without => (arr1, arr2) => arr2 is an array of values to be removed from arr1. without() returns a new array of arr1 with values of arr2 removed
* flatten => (array) => outputs a single array of elements from n-dimensional arrays
* middle => (array) => returns an array containing the middle element of the input array
* countOnly => (array, object) => returns an object containing counts of everything that the input object listed
* map => (array, callback) => returns a new array based on the results of the callback function. THe callback should take the original element, process it and then return it
* countLetters => (string) => returns a count of each of the letters in that sentence
* letterPositions => (string) => returns all the indices (zero-based positions) in the string where each character is found
* findKeyByValue => (object, value) => scans the object and returns the first key which contains the given value
* eqObjects => (object1, object2) => compares primitive, array and objects. Returns true if both objects are equal; otherwise, returns false. This is a recursive function
* assertObjectsEqual => (object1, object2) => compares two objects and returns an assertion message
* takeUntil => (array, callback) => returns a slice of the array with elements taken from the beginning until the callback returns a truthy value
* findKey => (object, callback) => scans the object and returns the first key for which the callback returns a truthy value