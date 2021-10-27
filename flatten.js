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

//this function 'flattens; an muti-dimensional array and returns a single array of all values
const flatten = function(array) {
  //create a new array to hold output
  let output = [];
  //loop through each element in array
  for (const elm of array) {
    //if the element is another array, loop through inner array and push the numbers to output
    if (Array.isArray(elm)) {
      for (const innerElm of elm) {
        output.push(innerElm);
      }
    } else {
      //otherwise, push the element to output
      output.push(elm);
    }
  }
  return output;
};

//test cases
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([[], 2, [], 5, []]), [2, 5]);
assertArraysEqual(flatten([[], [], []]), []);