// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/**
 * step 1: loop until the level reach the given number
 * step 2: create one row for each iteration, determine the number ponds, spaces for each row
 * step 3: print ponds first
 * step 4: print spaces then
 * step 5: continue to print next row
 */

const steps = (n) => {
  let levels = 1;

  // step 1
  while (levels <= n) {
    // step 2
    let spaces = n - levels;
    let ponds = levels;
    let row = '';

    // step 3
    while (ponds > 0) {
      row += '#';
      ponds--;
    }

    // step 4
    while (spaces > 0) {
      row += ' ';
      spaces--;
    }

    // step 5
    console.log(row);
    levels++;
  }
};

module.exports = steps;
