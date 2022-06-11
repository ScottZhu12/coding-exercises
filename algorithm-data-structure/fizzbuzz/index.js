// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

/**
 * step 1: continue looping until the current number reach the given number
 * step 2: since 15 is the LCM of 3 and 5, so check multiple of 15 first
 * step 3: check multiple of 3 and multiple of 5
 * step 4: default case: print the number itself
 */

const fizzBuzz = (n) => {
  let counter = 1;
  let currOutput = '';

  // step 1
  while (counter <= n) {
    currOutput =
      // step 2
      counter % 15 === 0
        ? 'fizzbuzz'
        : // step 3
        counter % 3 === 0
        ? 'fizz'
        : counter % 5 === 0
        ? 'buzz'
        : // step 4
          counter;

    console.log(currOutput);
    counter++;
  }
};

module.exports = fizzBuzz;
