/// SQUARE OF N
const square = (n) => sq = Math.pow(n, 2);

/// F TO C
const farenheit = (celsius) => conv = celsius * 1.8 + 32;

/// AREA OF A RECTANGLE
const rectangleArea = (a,b) => area = a * b;

/// PALINDROME
const isPalindrome = (str) => {
    let lowStr = str.toLowerCase();
    let start = lowStr;
    let end = lowStr.split('').reverse().join('');
    return end === start;
}
