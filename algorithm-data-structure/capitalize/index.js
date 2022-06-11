// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/**
 * step 1: convert string into array: separate each word
 * step 2: loop through the array, capitalize the first letter of each element and then joins with the remaining letters
 * step 3: convert the capitalized array into string
 */

const capitalize = (str) => {
  const words = [];

  // step 1
  const strArr = str.split(' ');

  // step 2
  for (const el of strArr) {
    words.push(el[0].toUpperCase() + el.slice(1));
  }

  // step 3
  return words.join(' ');
};

module.exports = capitalize;
