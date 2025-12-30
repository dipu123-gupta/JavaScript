# 📘 JavaScript Variables & Data Types (Notes)

This repository contains **basic JavaScript notes with code examples** covering:
- How to declare variables
- Differences between `var`, `let`, and `const`
- Primitive & Non-Primitive data types
- Immutability concept in JavaScript

These notes are ideal for **beginners**, **students**, and **quick revision**.

---

## 🔹 Variable Declaration in JavaScript

JavaScript provides three ways to declare variables:

---


### `let`
- Block scoped
- Value can be reassigned
- Cannot be redeclared in the same scope

```js
let name = "dipu";
let age = 90;
console.log(name);


### const
Block scoped

Reassignment is NOT allowed

Must be initialized at declaration time
const account = 10000;
console.log(account);


var (Old Method – Avoid)
Function scoped (not block scoped)

Can be redeclared

Causes unexpected bugs
var a = 10;
var a = 30; // No error

if (true) {
  var b = 20;
}

console.log(a);
console.log(b); // Accessible outside block
👉 Modern JavaScript discourages using var.

🔹 JavaScript Data Types
JavaScript data types are divided into Primitive and Non-Primitive types.

🧩 Primitive Data Types
Primitive data types store direct values and are immutable.

1️⃣ Number
let a = 23;
let b = 2.9;
console.log(a, b);


2️⃣ String
let name = "Dipu kumar";
let lastName = "Gupta";
console.log(name, lastName);


3️⃣ Boolean
let login = true;
let logout = false;
console.log(login, logout);

4️⃣ Undefined
let user;
console.log(user); // undefined


5️⃣ Null
let value = null;
console.log(value);


6️⃣ BigInt
Used for very large numbers.
let num = 8346873886917249867576n;
console.log(num);
🧩 Non-Primitive Data Types
Non-primitive types store references and are mutable.

1️⃣ Array
let arr = [1, 45, "dipu", true];
console.log(arr);
console.log(typeof arr); // object


2️⃣ Object
let user = {
  name: "dipu",
  account: 239827,
  age: 28,
};
console.log(user);


3️⃣ Function
let fun = function main() {
  console.log("hello");
};
fun();
console.log(typeof fun); // function


🔁 Immutability in JavaScript
Primitive values are immutable
let a = 10;
a = 20;
console.log(a); // 20
js
Copy code
let str = "Dipu";
str = "Sonu";
str[0] = "D"; // No effect
console.log(str); // Sonu
👉 Strings and numbers cannot be modified directly.
A new value is created instead.

🎯 Key Takeaways
Use const by default

Use let when reassignment is required

Avoid var

Primitive data types are immutable

Objects & arrays are mutable

JavaScript is dynamically typed