/* It will take in two parameters as well:

    The array to work with
    The callback (which Lodash calls "predicate")

    The function will return a "slice of the array with elements taken from the beginning."
    It should keep going until the callback/predicate returns a truthy value.
*/

const takeUntil = function(array, callback) {
  //create a new array to return
  let output = [];
  //loop through each element in array
  for (const elm of array) {
    //break out of loop if the callback detects an unwanted elm in array
    if (callback(elm)) break;
    //otherwise continue pushing elm into output
    output.push(elm);
  }
  return output;
};

//export function
module.exports = takeUntil;