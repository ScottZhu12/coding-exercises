// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/**
 * step 1: create an array contains a | e | i | o | u for later check
 * step 2: loop through the string and convert the string into lowercase
 * step 3: if the character is included in the array, increase the counter by 1
 */

const vowels = (str) => {
  let counter = 0;
  // step 1
  const vowelsArr = ['a', 'e', 'i', 'o', 'u'];

  // step 2
  for (char of str.toLowerCase()) {
    // step 3
    if (vowelsArr.includes(char)) {
      counter++;
    }
  }

  return counter;
};

module.exports = vowels;
