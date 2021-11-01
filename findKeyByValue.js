//function implementation
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🟩🟩🟩 Assertion Passed: ${actual} === ${expected}`) : console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(object, value) {
  //loop through each properties in object
  for (const key in object) {
    //check if this key-value pair matches value
    if (object[key] === value) return key;
  }
  //after looping through all properties in object and not finding the correct key, return undefined
  return undefined;
};

//test cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  crap: "The Expanse",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");

//export function
module.exports = findKeyByValue;