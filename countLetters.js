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

//export function
module.exports = countLetters;