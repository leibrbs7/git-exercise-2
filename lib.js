/// SQUARE OF N
const square = (n) => {
    let sq = Math.pow(n, 2);
    return sq;
}
/// F TO C
const farenheit = (celsius) => {
    let conv = celsius * 1.8 + 32;
    return conv;
}

/// AREA OF A RECTANGLE
const rectangleArea = (a,b) => {
    let area = a * b;
    return area;
}

/// PALINDROME
const isPalindrome = (str) => {
    let lowStr = str.toLowerCase();
    let start = lowStr;
    let end = lowStr.split('').reverse().join('');
    return end == start;
}
