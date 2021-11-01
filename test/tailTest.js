//import functions for tests
const assertEqual = require('../assertEqual');
const tail = require('../tail');

/**test cases**/
//string array
let result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');
//number array
result = tail([1, 3, 4]);
assertEqual(result.length, 2);
assertEqual(result[0], 3);
assertEqual(result[1], 4);
//one element array
result = tail([8]);
assertEqual(result.length, 0);
assertEqual(result[0], undefined);
//empty array
result = tail([]);
assertEqual(result.length, 0);
assertEqual(result[0], undefined);