//function implementation
const assertEqual = function(actual, expected) {
  return actual === expected ? `🟩🟩🟩 Assertion Passed: ${actual} === ${expected}` : `🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`;
};

//function returns true if both arrays are equal in length, value and type
const eqArrays = function(arr1, arr2) {
  //arr1 is not equal to arr2 if both arrays have different lengths
  if (arr1.length !== arr2.length) return false;
  //loop through each element of both arrays
  for (let i = 0; i < arr1.length; i++) {
    //return false immediately once different elements are detected
    if (arr1[i] !== arr2[i]) return false;
  }
  //both arrays are equal, return true
  return true;
};

//test cases
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 1, 3]), false));
console.log(assertEqual(eqArrays([1, 2], [1, 2, 3]), false));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3, -4]), false));
console.log(assertEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'c']), true));
console.log(assertEqual(eqArrays([1, '2', 3], [1, '2', 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], []), false));
console.log(assertEqual(eqArrays([], [1, 2, 3]), false));
console.log(assertEqual(eqArrays([], []), true));