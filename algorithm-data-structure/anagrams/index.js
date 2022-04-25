const buildMap = (str) => {
  const strMap = {};
  const tempStr = str.replace(/[^\w\s]/g, '').toLowerCase();

  for (const char of tempStr) strMap[char] = strMap[char] + 1 || 1;

  return strMap;
};

const anagrams = (stringA, stringB) => {
  const stringAMap = buildMap(stringA);
  const stringBMap = buildMap(stringB);

  if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length)
    return false;

  for (const key in stringAMap) {
    if (stringAMap[key] !== stringBMap[key]) return false;
  }

  return true;
};

module.exports = anagrams;
