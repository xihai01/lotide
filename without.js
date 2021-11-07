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

//export modules
module.exports = without;