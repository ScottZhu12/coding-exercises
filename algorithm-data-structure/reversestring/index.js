// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * step 1: convert string into an array
 * step 2: use reduce function to join the elements together in a reversed order
 */

const reverse = (str) => {
  // step 1
  const strArr = str.split('');

  // step 2
  const reverseStr = strArr.reduce((prev, curr) => curr + prev, '');

  return reverseStr;
};

module.exports = reverse;
