/**
 * Section Sort Implementation
 *
 * Time Complexity - O(n^2)
 *
 * Returns a sorted array
 * @param {Array} inputArray Array to be sorted
 * @returns {Array} Sorted Array
 */

const selectionSort = (inputArray) => {
  inputArray.forEach((element, index) => {
    const { minValue, minIndex } = findSmallest(inputArray, index);
    if (index != minIndex) {
      inputArray[minIndex] = element;
      inputArray[index] = minValue;
    }
  });
  return inputArray;
};

/**
 * Find the smallest element in an array
 * @param {Array} inputArray Array to be iterated
 * @param {Number} startPosition Position from where the function should look for the smallest element
 * @returns Smallest available element and index in the array
 */

const findSmallest = (inputArray, startPosition) => {
  let minValue = inputArray[startPosition];
  let minIndex = startPosition;
  for (let index = startPosition; index < inputArray.length; index++) {
    if (inputArray[index] < minValue) {
      minValue = inputArray[index];
      minIndex = index;
    }
  }
  return { minValue, minIndex };
};

const testArray1 = [9, 3, 4, 6, 8, 0, 1, 2];
const testArray2 = [89, 13, 74, 6, 98, 30, 51, 62];
const testArray3 = ['qwe', 'asa', 'asd', 'wte', 'xcv'];

console.log(selectionSort(testArray1));
console.log(selectionSort(testArray2));
console.log(selectionSort(testArray3));
