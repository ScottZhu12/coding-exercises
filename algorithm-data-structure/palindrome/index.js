// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/**
 * step 1: reverse the string
 * step 2: compare the original string with the reversed string
 */

const palindrome = (str) => {
  // step 1
  const reversedStr = str.split('').reduce((prev, curr) => curr + prev, '');

  // step 2
  return str === reversedStr;
};

module.exports = palindrome;
