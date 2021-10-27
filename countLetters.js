//function implementation
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🟩🟩🟩 Assertion Passed: ${actual} === ${expected}`) : console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(string) {
  //create an empty object to store results
  let output = {};
  //loop through each char in string
  for (const char of string) {
    //don't count spaces as characters
    if (char !== ' ') {
      //if output has this char 
      if (output[char]) {
        //property already exists, increment it
        output[char]++;
      } else {
        //create new property in output
        output[char] = 1;
      }
    }
  }
  return output;
};

console.log(countLetters('lighthouse in the house'));
console.log(countLetters('abbcccddddeeeeeffffffggggggg'));
console.log(countLetters('                               e'));