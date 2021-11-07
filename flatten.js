//this function "flattens" an muti-dimensional array and returns a single array of all values
const flatten = function(array) {
  //create a new array to hold output
  let output = [];
  //push and return element if not array type
  if (!Array.isArray(array)) {
    output.push(array);
    return output;
  }
  //loop through each element in array to check for nested arrays
  for (const elm of array) {
    //concat the array returned from recursive call 
    output = output.concat(flatten(elm));
  }
  return output;
};

//export function
module.exports = flatten;