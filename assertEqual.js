//function implementation
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🟩🟩🟩 Assertion Passed: ${actual} === ${expected}`) : console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
};

//test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(-13, 0);
assertEqual("helloworld", "hellbworld");