export const square = (n) => n * n

export const farenheit = (celsius) => celsius * 1.8 + 32

export const rectangleArea = (a, b) => a * b

export const isPalindrome = (str) => {
  const lowStr = str.toLowerCase()
  const reverse = lowStr.split('').reverse().join('')
  return lowStr === reverse
}
