const capitalize = (str) => {
  const words = [];
  const strArr = str.split(' ');

  for (const el of strArr) {
    words.push(el[0].toUpperCase() + el.slice(1));
  }

  return words.join(' ');
};

module.exports = capitalize;
