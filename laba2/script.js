
/*1
function getRectangleArea(width, height) {
  return width * height;
}
console.log(getRectangleArea(5, 10));
*/

/*2
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
console.log(getCircleCircumference(5));
*/

/*3
function getAverage(value1, value2) {
    return (value1 + value2) / 2;
}
console.log(getAverage(5, 5));
*/

/*4
function getDistanceBetweenPoints(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}
console.log(getDistanceBetweenPoints(0, 0, 0, 1));
*/

/*5
function getLinearEquationRoot(a, b) {
    return -b / a;
}
console.log(getLinearEquationRoot(5, -10));
*/

/*6
function getAngleBetweenVectors(x1, y1, x2, y2) {
    return Math.abs(Math.atan2(y1, x1) - Math.atan2(y2, x2));
}
console.log(getAngleBetweenVectors(1, 0, 0, 1));
*/

/*7
function getLastDigit(value) {
    return value % 10;
}
console.log(getLastDigit(100));
*/

/*8
function parseNumberFromString(value) {
    return Number(value);
}
console.log(parseNumberFromString('100'));
*/

/*9
function getParallelepipedDiagonal(a, b, c) {
    return Math.hypot(a, b, c);
}
console.log(getParallelepipedDiagonal(1, 1, 1));
*/

/*10
function roundToPowerOfTen(num, pow) {
    let fac = Math.pow(10, pow);
    return Math.round(num / fac) * fac;
}
console.log(roundToPowerOfTen(1234, 2));
*/

/*11
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
        return false;
        }
    }

    return true;
}
console.log(isPrime(5));
*/

/*12
function toNumber(value, def) {
    let num = Number(value);

    if (Number.isFinite(num)) {
        return num;
    }

    return def;
}
console.log(toNumber('test', 0));
*/

/*13
function getCube(num) {
  return num ** 3;
}
console.log(getCube(3));
*/

/*14
function getFibonacciNumber(index) {
    if (index <= 1) return index;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= index; i++) {
        let next = a + b;
        a = b;
        b = next;
    }

    return b;
}
console.log(getFibonacciNumber(10));
*/

/*15
function getSumToN(n) {
    let sum = 0;
        for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSumToN(5));
*/

/*16
function getSumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(getSumOfDigits(123));
*/

/*17
function isPowerOfTwo(num) {
    if (num <= 0) return false;
    while (num > 1) {
        if (num % 2 !== 0) return false;
    num = num / 2;
    }
    return true;
}
console.log(isPowerOfTwo(16));
*/

/*18
function getSine(num) {
    return Math.sin(num);
}
console.log(getSine(Math.PI / 2));
*/

/*19
function numberToStringInBase(number, base) {
    return number.toString(base);
}
console.log(numberToStringInBase(255, 16));
*/

/*20
function toExponential(number, fractionDigits) {
    return number.toExponential(fractionDigits);
}
console.log(toExponential(12345, 2));
*/

/*21
function toFixed(number, fractionDigits) {
    return number.toFixed(fractionDigits);
}
console.log(toFixed(12345, 2));
*/

/*22
function toPrecision(number, precision) {
    return number.toPrecision(precision);
}
console.log(toPrecision(12.345, 4));
*/

/*23
function getNumberValue(number) {
    return number.valueOf();
}
console.log(getNumberValue(new Number(5)));
*/

/*24
function isNumber(number) {
    return Number.isFinite(number);
}
console.log(isNumber(Infinity));
*/

/*25
function isInteger(number) {
    return Number.isInteger(number);
}
console.log(isInteger(5));
*/

/*26
function getFloatOnString(str) {
    return parseFloat(str);
}
console.log(getFloatOnString('4.567abcdefgh'));
*/

/*27
function getIntegerOnString(str, base) {
    return parseInt(str, base);
}
console.log(getIntegerOnString('10', 8));
*/

/*28
function isSafeInteger(number) {
    return Number.isSafeInteger(number);
}
console.log(isSafeInteger(10));
*/

/*29
function roundToSmallestInteger(number) {
    return Math.floor(number);
}
console.log(roundToSmallestInteger(5.9));
*/

/*30
function roundToLargestInteger(number) {
    return Math.ceil(number);
}
console.log(roundToLargestInteger(5.1));
*/

/*31
function roundToNearestInteger(number) {
    return Math.round(number);
}
console.log(roundToNearestInteger(5.5));
*/

/*32
function getIntegerPartNumber(number) {
    return Math.trunc(number);
}
console.log(getIntegerPartNumber(5.5));
*/

/*33
function getSumOfNumbers(x1, x2, x3) {
    return x1 + x2 + x3;
}
console.log(getSumOfNumbers(1, 2, 3));
*/

/*34
function getMaxNumber(firstNumber, secondNumber) {
    return Math.max(firstNumber, secondNumber);
}
console.log(getMaxNumber(1, 2));
*/

/*35
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
console.log(getRandomInteger(-1, 1));
*/

/*36
function getHypotenuse(a, b) {
    return Math.hypot(a, b);
}
console.log(getHypotenuse(3, 4));
*/

/*37
function getCountOfOddNumbers(number) {
    return Math.ceil(number / 2);
}
console.log(getCountOfOddNumbers(15));
*/