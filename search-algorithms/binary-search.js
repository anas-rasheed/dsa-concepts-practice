/**
 * Binary Search Implementation
 *
 * Time complexity - O(log n)
 *
 * Searches the input searchItem from a sorted array
 * @param {number[]} inputArray Sorted input array
 * @param {number} searchItem Number to be searched
 * @returns {number} Index of the searchItem in inputArray
 */

const binarySearch = (inputArray, searchItem) => {
  let low = 0;
  let high = inputArray.length - 1;
  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    let midTerm = inputArray[mid];
    if (midTerm === searchItem) {
      return mid;
    }
    if (midTerm < searchItem) {
      low = mid + 1;
    } else if (midTerm > searchItem) {
      high = mid - 1;
    }
  }
};

const testArray1 = [2, 4, 6, 8, 9, 10];
const testArray2 = [11, 22, 31, 35, 36, 73];

console.log(binarySearch(testArray1, 6));
console.log(binarySearch(testArray2, 36));
