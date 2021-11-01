//import assertEqual
const assertEqual = require('./assertEqual');

//head function returns the first item in an array
const head = function(array) {
  return array[0];
};

//test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([-89]), -89);
assertEqual(head([]), undefined);