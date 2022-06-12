// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/**
 * r:0;       r:0;
 * c:0;       c:n-1;
 * [[1, 2, 3, 4],
 * [12, 13, 14, 5],
 * [11, 16, 15, 6],
 * [10, 9, 8, 7]]
 * r:n-1;     r:n-1;
 * c:0;       c:n-1;
 *
 * split probelm into 4 sub-problem:
 * print in right direction
 * print in down direction
 * print in left direction
 * print in up direction
 *
 * step 1: create empty resulting 2-D array
 * step 2: loop until either startRow number is larger than endRow number or startColumn number is larger than endColumn number
 * step 3: print to right
 * step 4: print to down
 * step 5: print to left
 * step 6: print to up
 */

const matrix = (n) => {
  const resultArr = [];
  let startRow = 0;
  let startColumn = 0;
  let endRow = n - 1;
  let endColumn = n - 1;
  let counter = 1;

  // step 1
  for (let i = 0; i < n; i++) {
    resultArr.push([]);
  }

  // step 2
  while (startRow <= endRow && startColumn <= endColumn) {
    // step 3
    for (let i = startColumn; i <= endColumn; i++) {
      resultArr[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // step 4
    for (let i = startRow; i <= endRow; i++) {
      resultArr[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // step 5
    for (let i = endColumn; i >= startColumn; i--) {
      resultArr[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // step 6
    for (let i = endRow; i >= startRow; i--) {
      resultArr[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return resultArr;
};

module.exports = matrix;
