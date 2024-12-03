const min = 1,
  max = 10;
const random = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
const toBinary = (num) => (num >>> 0).toString(2);
const randomInt = random(min, max);

console.log(randomInt); // Random number between 1 and 10

console.log(random);
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045 (Euler's number)
console.log(Math.LN10); // 2.302585092994046 (Natural log of 10)
console.log(Math.SQRT2); // 1.4142135623730951 (Square root of 2)

console.log(Math.round(4.5)); // Rounds to the nearest integer
console.log(Math.ceil(4.1)); // Rounds up to the nearest integer
console.log(Math.floor(4.9)); // Rounds down to the nearest integer
console.log(Math.trunc(4.7)); // Trims the decimal part

console.log(Math.pow(2, 3)); // Computes base to the power of exponent.
console.log(Math.sqrt(16)); // Returns the square root
console.log(Math.cbrt(27)); // Returns the cube root

console.log(Math.min(3, 7, 1, 9)); // Returns the smallest number
console.log(Math.max(3, 7, 1, 9)); // Returns the largest number

// Math.asin(x), Math.acos(x), Math.atan(x): Inverse trigonometric functions
// Math.sin(x), Math.cos(x), Math.tan(x): Trigonometric functions
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1
console.log(Math.tan(Math.PI / 4)); // 1

console.log(Math.log(1)); // Natural logarithm (base e)
console.log(Math.log10(100)); // Logarithm (base 10).
console.log(Math.log2(8)); // Logarithm (base 2).

// Absolute Value
// Math.abs(x): Returns the absolute value of a number
console.log(Math.abs(-42)); // 42

// Exponential
console.log(Math.exp(1)); // 2.718281828459045 (Euler's number)
