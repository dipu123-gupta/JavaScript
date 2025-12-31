# JavaScript Operators

## What is an Operator?
An operator is a special symbol or keyword used to perform an operation on values.

## Key Terms
- **Operator** → Symbol that performs action (`+`, `=`, `===`)
- **Operand** → Value on which operator works
- **Expression** → Combination of operator and operands

## Example

let result = 5 + 10;
+ → operator

5, 10 → operands

5 + 10 → expression (evaluates to 15)


// ---

# 📘 02-arithmetic-operators

# Arithmetic Operators in JavaScript

## List of Operators
| Operator | Meaning |
|--------|---------  |
| +      |Addition   |
| -      |Subtraction|
| *      |Multiplication|
| /      |Division   |
| %      |Modulus    |
| **     |Exponent   |

## Example
console.log(10 % 3); // 1
console.log(2 ** 3); // 8
Increment & Decrement

let x = 5;
console.log(x++); // 5
console.log(++x); // 7
Prefix vs Postfix
x++ → use value first, then increment

++x → increment first, then use


---

# 📘 03-comparison-operators

# Comparison Operators

## Operators
- `>`
- `<`
- `>=`
- `<=`
- `==` (Loose Equality ❌)
- `===` (Strict Equality ✅)

## Strict vs Loose Equality
```js
7 == "7";   // true
7 === "7";  // false
Best Practice
✅ Always use === and !==

---
# 📘 04-logical-operators

# Logical Operators

## Operators
| Operator |Meaning|
|--------|---------|
| &&     | AND     |
| ||     | OR      |
| !      | NOT     |

## Short Circuiting

let user = null;
if (user && user.name) {
  console.log(user.name);
}
Truthy & Falsy
Falsy values:
false

0

""

null

undefined

NaN

Everything else is truthy
---

# 📘 05-bitwise-operators

# Bitwise Operators

Used at binary level (0s and 1s).

| Operator | Name |
|--------|--------|
| &      | AND    |
| |      | OR     |
| ^      | XOR    |
| ~      | NOT    |
| <<     |Left Shift|
| >>     |Right Shift|

## Example
5 & 3; // 1
5 << 1; // 10
⚠️ Do not confuse & with &&

---

# 📘 06-typeof-and-ternary

# typeof & Ternary Operator

## typeof
typeof 42;       // "number"
typeof "hello";  // "string"
typeof null;     // "object" ❌ (JS bug)
Ternary Operator

let age = 20;
let msg = age >= 18 ? "Adult" : "Minor";


---

# 📘 07-operator-precedence
# Operator Precedence

Operators have priority order.


2 + 3 * 5; // 17
Best Practice
Always use parentheses for clarity:


(2 + 3) * 5; // 25


---

# 📘 08-how-numbers-work-in-js

# How Numbers Work in JavaScript

## Why 0.1 + 0.2 !== 0.3
JavaScript uses **binary (base-2)**, not decimal.

0.1 + 0.2; // 0.30000000000000004
Reason
Binary cannot exactly represent 0.1 or 0.2

Rounding errors accumulate

---

# 📘 09-type-conversion

# Type Conversion in JavaScript

## Types of Conversion
1. Implicit (Automatic ❌)
2. Explicit (Manual ✅)

## Convert to String
String(123); // "123"
Convert to Number

Number("99");     // 99
parseInt("10px"); // 10
+"50";            // 50
Convert to Boolean

Boolean(0);   // false
Boolean("hi"); // true
yaml
Copy code

---

# 📘 10-equality-comparison-deep-dive


# Equality Comparison Deep Dive

## Strict Equality (===)
- No type conversion
- Safer

## Loose Equality (==)
- Type coercion
- Confusing rules

## Special Cases
```js
null == undefined; // true
NaN === NaN; // false
---

# 📘 11-if-else

```md
# if-else in JavaScript

## Basic if
```js
if (age > 18) {
  console.log("Adult");
}
if-else
js
Copy code
if (age >= 18) {
  console.log("Vote");
} else {
  console.log("Not eligible");
}
else if Chain
Executed top-to-bottom.

---

# 📘 12-loops-in-javascript

# Loops in JavaScript

## for Loop

for (let i = 1; i <= 5; i++) {
  console.log(i);
}


## while Loop

while (health > 0) {
  health--;
}

## do-while Loop
Runs at least once.

do {
  input = prompt("yes");
} while (input !== "yes");
⚠️ Always avoid infinite loops


---

## ✅ Next Step (Optional)
Aap chaho to main:
- 📦 **GitHub-ready ZIP structure** bana du  
- 🧪 **Interview MCQs per README** add kar du  
- 📝 **Hindi + English mixed notes** version bana du  