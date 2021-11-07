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

//export function
module.exports = flatten;