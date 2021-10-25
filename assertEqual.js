//function implementation
const assertEqual = function(actual, expected) {
  return actual === expected ? `🟩🟩🟩 Assertion Passed: ${actual} === ${expected}` : `🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`;
};

//test code
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual(-13, 0));
console.log(assertEqual("helloworld", "hellbworld"));