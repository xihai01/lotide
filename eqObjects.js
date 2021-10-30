//function implementation
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🟩🟩🟩 Assertion Passed: ${actual} === ${expected}`) : console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
};

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

//test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
/*  */
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const cdd = { c: "1", d: ["2", 3] };
const ddc = { d: ["2", 3], c: ["1"] };
assertEqual(eqObjects(cdd, ddc), false); // => false
const cdd2 = { c: "1", d: 2 };
assertEqual(eqObjects(cdd, cdd2), false); // => false

assertEqual(eqObjects({ a: { z: 1, x: {o: 3} }, b: 2 }, { a: { z: 1, x: {o: 3} }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false