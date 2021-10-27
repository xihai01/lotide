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

//checks whether the two arrays are equal
const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  result ? console.log(`🟩🟩🟩 Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🟥🟥🟥 Assertion Failed: ${arr1} !== ${arr2}`);
};

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