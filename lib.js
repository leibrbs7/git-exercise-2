const square = (n) => sq = Math.pow(n, 2);

const farenheit = (celsius) => conv = celsius * 1.8 + 32;

const rectangleArea = (a, b) => area = a * b;

const isPalindrome = (str) => {
    let lowStr = str.toLowerCase();
    let start = lowStr;
    let end = lowStr.split('').reverse().join('');
    return end === start;
}
