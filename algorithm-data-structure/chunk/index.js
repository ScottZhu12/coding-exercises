// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/**
 * step 1: loop through the array until current index number is larger than or equal to the length of the array
 * step 2: while looping through the array, get the subarray and push to the new resulting array
 * step 3: return the new resulting array
 */

const chunk = (arr, size) => {
  const chunked = [];
  let index = 0;

  // step 1
  while (index < arr.length) {
    // step 2
    chunked.push(arr.slice(index, index + size));
    index += size;
  }

  // step 3
  return chunked;
};

module.exports = chunk;
