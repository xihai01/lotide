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

//test codes
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//expected output
/* [ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

//export function
module.exports = takeUntil;