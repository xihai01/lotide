const findKeyByValue = function(object, value) {
  //loop through each properties in object
  for (const key in object) {
    //check if this key-value pair matches value
    if (object[key] === value) return key;
  }
  //after looping through all properties in object and not finding the correct key, return undefined
  return undefined;
};

//export function
module.exports = findKeyByValue;