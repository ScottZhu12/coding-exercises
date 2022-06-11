// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/**
 * step 1: get rid of all spaces and punctuations
 * step 2: convert all uppercase letters to lowercase letters
 * step 3: create character maps: { character: number of occurrences }
 * step 4: compare two maps: number of keys, and corresponding value for each key
 */

// helper function to create character map
const buildMap = (str) => {
  const strMap = {};
  // step 1 and step 2
  const tempStr = str.replace(/[^\w\s]/g, '').toLowerCase();

  // step 3
  for (const char of tempStr) strMap[char] = strMap[char] + 1 || 1;

  return strMap;
};

const anagrams = (stringA, stringB) => {
  const stringAMap = buildMap(stringA);
  const stringBMap = buildMap(stringB);

  // step 4: check number of keys
  if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length)
    return false;

  // step 4: check the corresponding value for each key
  for (const key in stringAMap) {
    if (stringAMap[key] !== stringBMap[key]) return false;
  }

  return true;
};

module.exports = anagrams;
