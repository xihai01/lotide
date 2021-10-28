/* Our map function will take in two arguments:

    An array to map
    A callback function

The map function will return a new array based on the results of the callback function. */

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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//test codes
const results1 = map(words, word => word[0]);
console.log(results1);

//multiply numbers
const num = [0, 1, 2, 3, 6, 8];
const result2 = map(num, x => x * 2);
assertArraysEqual(result2, [0, 2, 4, 6, 12, 16]);

//manipulate strings
const str = ['hello', 'sup', 'thanks'];
const result3 = map(str, x => x + 'way');
assertArraysEqual(result3, ['helloway', 'supway', 'thanksway']);

//manipulate objects
const obj = [{name: 'bob', age: 23}, {name: 'emily', age: 15}];
const result4 = map(obj, x => {
  return x.name;
});
console.log(result4);