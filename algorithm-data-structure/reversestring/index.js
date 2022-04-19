const reverse = (str) => {
  const strArr = str.split('');

  const reverseStr = strArr.reduce((prev, curr) => curr + prev, '');

  return reverseStr;
};

module.exports = reverse;
