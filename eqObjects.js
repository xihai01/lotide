const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  //step 1: check for primitive values
  //create two variables to hold the keys of the objects in arrays
  const objOneKey = Object.keys(object1);
  const objTwoKey = Object.keys(object2);
  //return false if objects have different number of keys
  if (objOneKey.length !== objTwoKey.length) return false;
  //loop through each key in object1
  for (const key of objOneKey) {
    //call eqArrays if this key holds an array for its value
    if (Array.isArray(object1[key]) === true) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof(object1[key]) === 'object') {
      //if we have a nested object, recursively call eqObject
      //if the recursive function returns false, we want to capture this upon return
      if (eqObjects(object1[key], object2[key]) === false) {
        return false;
      }
    } else {
      //compare values of both objects with this key
      if (object1[key] !== object2[key]) return false;
    }
  }
  return true;
};

//export function
module.exports = eqObjects;