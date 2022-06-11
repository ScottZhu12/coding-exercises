// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/**
 * step 1: create a character map: { character: number of occurrences }
 * step 2: loop through the character map, compare the value with the current maximum value
 * step 3: if value is larger than current maximum value, update both character and the current maximum value, else no update
 */

const maxChar = (str) => {
  const strObj = {};

  // step 1
  for (const char of str) strObj[char] = strObj[char] ? ++strObj[char] : 1;

  let currMaxVal = 0;
  let currMaxChar = '';

  // step 2
  for (const char in strObj) {
    // step 3
    if (strObj[char] > currMaxVal) {
      currMaxChar = char;
      currMaxVal = strObj[char];
    }
  }

  return currMaxChar;
};

console.log(maxChar('hello'));

module.exports = maxChar;
