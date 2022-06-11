// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/**
 * step 1: convert the number into string
 * step 2: preserve sign of the original number
 * step 3: reverse the string
 * step 4: convert the sting back to number, and get rid of any trailing zeros, finally multiply the resulting number by the original sign
 */

const reverseInt = (num) => {
  // step 1
  const numArr = num.toString().split('');

  // step 2
  const sign = Math.sign(num);

  // step 3
  const reversedNumStr = numArr.reduce((prev, curr) => curr + prev, '');

  // step 4
  const reversedNum = parseInt(reversedNumStr) * sign;

  return reversedNum;
};

module.exports = reverseInt;
