function mergeSort(array) {
  // Create a copy of the array to avoid mutating the original array
  const x = [...array];

  // Base case: if the array has 1 or fewer elements, it is already sorted
  if (x.length <= 1) return x;

  // Find the midpoint of the array
  const midPoint = Math.floor(x.length / 2);

  // Recursively sort the left half of the array
  const leftArray = mergeSort(x.slice(0, midPoint));

  // Recursively sort the right half of the array
  const rightArray = mergeSort(x.slice(midPoint, x.length));

  // Merge the sorted halves and return the result
  return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray) {
  let i = 0; // Pointer for leftArray
  let j = 0; // Pointer for rightArray
  let k = 0; // Pointer for the result array
  let result = [];

  // Merge the two arrays while there are elements in both
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] > rightArray[j]) {
      result[k] = rightArray[j];
      j++;
    } else {
      result[k] = leftArray[i];
      i++;
    }
    k++;
  }

  // Copy any remaining elements from leftArray
  while (i < leftArray.length) {
    result[k] = leftArray[i];
    i++;
    k++;
  }

  // Copy any remaining elements from rightArray
  while (j < rightArray.length) {
    result[k] = rightArray[j];
    j++;
    k++;
  }

  // Return the merged array
  return result;
}

module.exports = { mergeSort };
