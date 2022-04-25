const maxChar = (str) => {
  const strObj = {};

  for (const char of str) strObj[char] = strObj[char] ? ++strObj[char] : 1;

  let currMaxVal = 0;
  let currMaxChar = '';

  for (const char in strObj) {
    currMaxChar = strObj[char] > currMaxVal ? char : currMaxChar;
    currMaxVal = strObj[char];
  }

  return currMaxChar;
};

console.log(maxChar('hello'));

module.exports = maxChar;
