const findKey = function(object, callback) {
  //loop through each key in object
  for (const key in object) {
    //get the value of this key
    const value = object[key];
    //key is returned if callback returns a truthy value
    if (callback(value)) return key;
  }
  //after not finding the correct key, return undefined
  return undefined;
};

//export function
module.exports = findKey;