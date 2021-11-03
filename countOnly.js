//allItems: an array of strings that we need to look through
//itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item]++;
      } else {
        //create new key-value pair in results
        results[item] = 1;
      }
    }
  }

  return results;
};

//export functions
module.exports = countOnly;