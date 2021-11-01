//function returns true if both arrays are equal in length, value and type
const eqArrays = function(arr1, arr2) {
  //check both arrays are the same type
  //arr1 is not equal to arr2 if both arrays have different lengths
  if (arr1.length !== arr2.length) return false;
  //loop through each element of both arrays
  for (let i = 0; i < arr1.length; i++) {
    //check if element is an array
    if (Array.isArray(arr1[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  //both arrays are equal, return true
  return true;
};

//export function
module.exports = eqArrays;