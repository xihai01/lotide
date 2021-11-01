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

//returns a new array with the array of elements removed
const without = function(arr1, arr2) {
  let output = [];
  //edge case: return arr1 if arr2 is empty
  if (arr2.length === 0) return arr1;
  //loop through arr1
  top:
  for (const i of arr1) {
    //loop through arr2
    for (const j of arr2) {
      //if both values in arr1 and arr2 are equal, continue to next iteration of arr1
      if (i === j) {
        continue top;
      }
    }
    //push element in arr1 to output
    output.push(i);
  }
  return output;
};

//test cases
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
assertArraysEqual(without([], []), []); //both empty arrays
assertArraysEqual(without(['1', '2', '3'], []), ['1', '2', '3']); //arr2 is empty => return original array
assertArraysEqual(without([], [1, 2, '3']), []); //arr1 is empty => return empty array
assertArraysEqual(without(['1', 2, '3'], [1, 2, '3']), ['1']);
assertArraysEqual(without(['1', '2', '3', 3, 3, 3], [3]), ['1', '2', '3']);

//export modules
module.exports = without;