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

//this function returns the middle element of an array
const middle = function(array) {
  let length = array.length;
  //return [] if array has one or two elements
  if (length === 0 || length === 1 || length === 2) {
    return [];
  } else if (length % 2 === 0) {
    //if array length is even, then return the middle
    //middle => index = array.length / 2, array.slice(index, 2)
    let middleIndex = (length / 2) - 1;
    return array.slice(middleIndex, middleIndex + 2);
  } else {
    //if array length is odd, then return the middle
    //middle => array[(array.length - 1) / 2]
    let output = [];
    output.push(array[(length - 1) / 2]);
    return output;
  }
};

//export function for testing
module.exports = middle;