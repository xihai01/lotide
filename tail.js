//this function slices off the first element and returns the rest
const tail = function(array) {
  //create a new array
  let tailArr = [];
  for (let i = 1; i < array.length; i++) {
    tailArr.push(array[i]);
  }
  return tailArr;
};

//export function
module.exports = tail;