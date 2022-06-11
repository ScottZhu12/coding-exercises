// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/**
 * step 1: loop until the number of rows printed reach the given number
 * step 2: determine the number of spaces, ponds, spaces for each row based on the given number
 * step 3: print spaces first
 * step 4: print ponds
 * step 5: print spaces
 * step 6: continue to print the next row
 */

const pyramid = (n) => {
  let level = 1;

  // step 1
  while (level <= n) {
    // step 2
    let spacesLeft = n - level;
    let ponds = 1;
    let spacesRight = n - level;
    let row = '';

    // step 3
    while (spacesLeft !== 0) {
      row += ' ';
      spacesLeft--;
    }

    // step 4
    while (ponds <= level * 2 - 1) {
      row += '#';
      ponds++;
    }

    // step 5
    while (spacesRight !== 0) {
      row += ' ';
      spacesRight--;
    }

    // step 6
    console.log(row);
    level++;
  }
};

module.exports = pyramid;
