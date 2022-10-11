const square = (n) => Math.pow(n, 2);

const farenheit = (celsius) => celsius * 1.8 + 32;

const rectangleArea = (a, b) => a * b;

const isPalindrome = (str) => {
  let lowStr = str.toLowerCase();
  let reverse = lowStr.split('').reverse().join('');
  return lowStr === reverse;
};

module.exports = {
  square,
  farenheit,
  rectangleArea,
  isPalindrome,
};
