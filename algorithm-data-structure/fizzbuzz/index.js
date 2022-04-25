const fizzBuzz = (n) => {
  let counter = 1;
  let currOutput = '';

  while (counter <= n) {
    currOutput =
      counter % 15 === 0
        ? 'fizzbuzz'
        : counter % 3 === 0
        ? 'fizz'
        : counter % 5 === 0
        ? 'buzz'
        : counter;

    console.log(currOutput);
    counter++;
  }
};

module.exports = fizzBuzz;
