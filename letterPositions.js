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

const letterPositions = function(sentence) {
  const results = {};
  //logic to update results here
  //loop through each character in sentence
  for (let i = 0; i < sentence.length; i++) {
    //if this char is not a space
    if (sentence[i] !== ' ') {
      //create a key-value pair (array) in result for this char if it doesn't already exists
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
        //push char index
        results[sentence[i]].push(i);
      } else {
        //push char index
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

//test code for string 'lighthouse in the house'
const sentence = 'lighthouse in the house';
const expected = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

const result = letterPositions(sentence);
console.log(result);
for (const key in expected) {
  if (result[key] === undefined) {
    assertArraysEqual([], expected[key]);
  } else {
    assertArraysEqual(result[key], expected[key]);
  }
}

//export function
module.exports = letterPositions;