/*returns an object of letter positions (index) for a string*/
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

//export function
module.exports = letterPositions;