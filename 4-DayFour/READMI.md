🔢 JavaScript Number (Primitive Type)

In JavaScript, number is a primitive data type.
It represents both:

Integers → 10, 20

Floating-point numbers → 3.14, 99.99

let a = 10;
let b = 3.148908;

🔹 toFixed()
console.log(b.toFixed(2)); // 3.15

Explanation:

Limits the number of digits after the decimal point

Performs rounding

❗ Always returns a string, not a number

typeof b.toFixed(2); // "string"


📌 Use toFixed() for display or formatting, not for calculations.

🔹 parseInt()
console.log(parseInt(b)); // 3

Explanation:

Converts a number to an integer

Removes the decimal part completely

🔹 parseFloat()
console.log(parseFloat(b)); // 3.148908

Explanation:

Returns the full decimal number

Commonly used to convert strings into numbers

🔹 toPrecision()
console.log(b.toPrecision(4)); // 3.149

Explanation:

Controls the total number of significant digits

Useful in scientific or precision-based calculations

🔹 toString()
console.log(b.toString()); // "3.148908"

Explanation:

Converts a number into a string

🧱 Number Object (Wrapper Object)
let c = new Number(10);
let d = new Number(10);

Explanation:

new Number() creates a Number object

It is not a primitive number

Stored as an object in memory

console.log(typeof c); // object

❌ Comparing Number Objects
console.log(c == d);   // false
console.log(c === d);  // false

Why is this false?

Objects are compared by reference (memory location)

c and d are stored at different memory addresses

📌 Best Practice:

❌ Avoid new Number()
✅ Always use primitive numbers

🧠 Object Reference Example
let obj1 = { value: 20 };
let obj2 = { value: 20 };

console.log(obj1 == obj2);   // false
console.log(obj1 === obj2);  // false

Explanation:

Both objects contain the same data

But they are stored at different memory locations

console.log(obj1.value == obj2.value); // true


✔️ Here, only primitive values are compared.

📌 Primitive vs Non-Primitive
✅ Primitive (Value-based comparison)
let e = 10;
let f = e;

console.log(e == f); // true


Value is copied

Comparison is done by value

❌ Non-Primitive (Reference-based comparison)

Object

Array

Function

Comparison is done using memory reference, not value.

🧮 Math Object

Math is a built-in JavaScript object that provides mathematical constants and functions.

🔹 Math.abs()
console.log(Math.abs(-8)); // 8

Explanation:

Returns the absolute value

Removes the negative sign

🔹 Math.PI
console.log(Math.PI); // 3.141592653589793


Represents the value of π (pi)

🔹 Math.round()
console.log(Math.round(4.6)); // 5


Rounds to the nearest integer

🔹 Math.ceil()
console.log(Math.ceil(4.1)); // 5


Always rounds upward

🔹 Math.floor()
console.log(Math.floor(4.9)); // 4


Always rounds downward

🔹 Math.SQRT2
console.log(Math.SQRT2); // 1.4142135623730951


Predefined constant for √2

🔹 Math.pow()
console.log(Math.pow(2, 3)); // 8


Calculates power

2³ = 8

🔹 Math.sqrt()
console.log(Math.sqrt(16)); // 4


Calculates square root

🔹 Math.min() and Math.max()
console.log(Math.min(2, 5, 1, 7, 3)); // 1
console.log(Math.max(2, 5, 1, 7, 3)); // 7


Math.min() → smallest value

Math.max() → largest value

🎲 Math.random()
console.log(Math.random());

Explanation:

Returns a random number

Range: 0 (inclusive) to 1 (exclusive)

🔹 Random Number (0–9)
Math.floor(Math.random() * 10);

🔹 Random Number (0–99)
Math.floor(Math.random() * 100);

General Formula:
Math.floor(Math.random() * N);

✅ Final Summary

Primitive values are compared by value

Non-primitive values are compared by reference

toFixed() returns a string

new Number() creates an object (avoid it)

Math object is essential for calculations