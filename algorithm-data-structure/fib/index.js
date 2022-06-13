// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/**
 * create a traditional recursive function
 * step 1: define base cases: the first number is always 0, and the second number is always 1
 * step 2: otherwise, the current number is the sum of the previous two numbers
 *
 * create a memoized version
 * step 1: create a generic memoized helper function
 * if the function has been called with the same set of arguments before, just return the previous corresponding result
 * else call the traditional slow function for with the arguments for the first time and store the result in cache, finally return the result
 * step 2: create the traditional slow function, which will be memoized later
 * step 3: calling the function with memoized version
 */

// a traditional time-consuming cursive version
/*
const fib = (n) => {
  // step 1
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  // step 2
  return fib(n - 1) + fib(n - 2);
};
*/

// a memoized version
// step 1
const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
};

// step 2
let fib = (n) => {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};

// step 3
fib = memoize(fib);

module.exports = fib;
