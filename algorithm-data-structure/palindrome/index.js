const palindrome = (str) => {
  const reversedStr = str.split('').reduce((prev, curr) => curr + prev, '');

  return str === reversedStr;
};

module.exports = palindrome;
