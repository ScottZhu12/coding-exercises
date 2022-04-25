const steps = (n) => {
  let levels = 1;

  while (levels <= n) {
    let spaces = n - levels;
    let ponds = levels;
    let row = '';

    while (ponds > 0) {
      row += '#';
      ponds--;
    }

    while (spaces > 0) {
      row += ' ';
      spaces--;
    }

    console.log(row);
    levels++;
  }
};

module.exports = steps;
