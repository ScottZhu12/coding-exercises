const reverseInt = (num) => {
  const numArr = num.toString().split('');
  const sign = Math.sign(num);
  const reversedNumStr = numArr.reduce((prev, curr) => curr + prev, '');
  const reversedNum = parseInt(reversedNumStr) * sign;

  return reversedNum;
};

module.exports = reverseInt;
