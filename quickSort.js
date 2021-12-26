/* quick sort implementation with recursion */

const swap = function (array, indexOne, indexTwo) {
  let temp = array[indexOne];
  array[indexOne] = array[indexTwo];
  array[indexTwo] = temp;
};

const partition = function (array, right, pivot) {
  // create a pointer to store the index of a num greater than pivot
  let i = 0;
  // iterate thru array and swap the numbers
  for (let j = 0; j < right; j++) {
    if (array[j] <= pivot) {
      swap(array, i, j);
      // move i pointer up
      i++;
    }
  }
  //the left pointer now becomes the new pivot
  swap(array, i, right);
  return i;
};

const quickSort = function (array, left, right) {
  //base case: left < right
  if (left < right) {
    //get the pivot value
    const pivot = array[right];
    const part = partition(array, right, pivot);
    quickSort(array, left, part - 1);
    quickSort(array, part + 1, right);
  }
};

module.exports = quickSort;
