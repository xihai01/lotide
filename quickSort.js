/* quick sort implementation with recursion */

const array = [35, 33, 42, 10, 14, 19, 27, 44, 35, 31];

const swap = function (left, right) {
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
};

const partition = function (left, right, pivot) {
  // get the left endpoint and right endpoint exluding pivot
  let leftPoint = left;
  let rightPoint = right - 1;

  while (true) {
    //move left pointer to the right if its value < pivot
    while (array[leftPoint] < pivot) {
      leftPoint++;
    }
    //move right pointer to the left if its value > pivot
    while (array[rightPoint] > pivot) {
      rightPoint--;
    }
    //swap the two values held by left pointer and right pointer
    if (leftPoint >= rightPoint) {
      break;
    } else {
      swap(leftPoint, rightPoint);
    }
  }
  //the left pointer now becomes the new pivot
  swap(leftPoint, right);
  return leftPoint;
};

const quickSort = function (left, right) {
  //base case: right <= left
  if (right <= left) {
    return;
  } else {
    //get the pivot value
    const pivot = array[right];
    const part = partition(left, right, pivot);
    quickSort(left, part - 1);
    quickSort(part + 1, right);
  }
};

quickSort(0, array.length - 1)
console.log(array);