# 📘 JavaScript Objects – README.md

This document explains **JavaScript Objects** with clear examples.
It is written in **README.md style**, suitable for GitHub repositories, beginners, and interview preparation.

---

## 🔹 What is an Object in JavaScript?

An **object** is a non-primitive data type used to store data in **key–value pairs**.

```js
const person = {
  name: "John",
  age: 30,
  email: "john@example.com",
  city: "New York"
};

console.log(typeof person); // object


🔹 Accessing Object Properties
Dot Notation
console.log(person.name); // John

Bracket Notation
console.log(person["age"]); // 30

🔹 CRUD Operations on Objects
✅ Create (Add Property)
person.country = "USA";

📖 Read
console.log(person.city);

✏️ Update
person.age = 31;

❌ Delete
delete person.email;

🔹 Looping Through an Object (for...in)
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}


Used only for objects

Iterates over object keys

🔹 Reference Copy in Objects
const person2 = person;
person2.age = 35;

console.log(person.age); // 35


⚠️ Objects are copied by reference, not by value.

🔹 Object Utility Methods
Object.keys()
Object.keys(person);

Object.values()
Object.values(person);

Object.entries()
Object.entries(person);

🔹 Object Destructuring
const { name, age } = person;
console.log(name, age);


Improves readability

Commonly asked in interviews

🔹 Array Destructuring
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;

console.log(firstColor, secondColor); // red green

🔹 Using for...of with Objects
Looping Keys
for (let key of Object.keys(person)) {
  console.log(key);
}

Looping Values
for (let value of Object.values(person)) {
  console.log(value);
}

Looping Entries
for (let [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

🔹 Object Methods and this Keyword
const person = {
  name: "John",
  age: 30,
  greeting: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greeting();


this refers to the current object

🔹 Nested Objects
const student = {
  name: "Alice",
  age: 22,
  address: {
    street: "123 Main St",
    city: "Wonderland",
    zip: "12345"
  }
};

Access Nested Property
console.log(student.address.city); // Wonderland

🔹 Shallow Copy Using Spread Operator
const student2 = { ...student };

Problem with Shallow Copy
student2.address.city = "New City";

console.log(student2.address.city); // New City
console.log(student.address.city);  // New City


❗ Nested objects still share the same reference.

🔥 Key Interview Notes

Objects are reference types

Spread operator creates shallow copy

for...in → objects

for...of → arrays / iterables

Use this inside object methods

✅ Conclusion

Objects store structured data

Be careful with reference copying

Use destructuring for clean code

Nested objects require special attention

# 🧠 How JavaScript Stores Objects and Arrays in Memory

Understanding **memory storage** is one of the most important concepts in JavaScript.
It explains:
- Why objects change unexpectedly
- What reference copy means
- Difference between primitive and non-primitive data
- Shallow vs deep copy behavior

This topic is **very important for interviews**.

---

## 🔹 JavaScript Memory Overview

JavaScript uses **two main memory areas**:

| Memory Type | Purpose |
|------------ |-------- |
| Stack       | Stores primitive values and references    |
| Heap        | Stores objects, arrays, and functions     |

---

## 🔹 Primitive vs Non-Primitive Data Types

### ✅ Primitive Data Types
Stored **directly in stack memory**

- Number
- String
- Boolean
- Null
- Undefined
- Symbol
- BigInt

```js
let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20


✔ Copy by value
✔ Independent memory

🔹 Non-Primitive Data Types

Stored in heap memory

Object

Array

Function

Stack stores reference (address) to heap memory.

🔹 How Objects Are Stored in Memory
const person = {
  name: "John",
  age: 30
};

Memory Representation
STACK                     HEAP
------------------------------------------------
person  ───────────────▶  { name: "John", age: 30 }


person holds a reference

Actual object lives in heap

🔹 Reference Copy in Objects
const person2 = person;
person2.age = 40;

Memory Diagram
STACK                     HEAP
------------------------------------------------
person  ───────────────▶  { name: "John", age: 40 }
person2 ───────────────▶


❗ Both variables point to the same object

console.log(person.age); // 40

🔹 Why Objects Are Stored in Heap?

Objects can be large

Dynamic size

Heap allows flexible memory allocation

🔹 How Arrays Are Stored in Memory
const colors = ["red", "green", "blue"];


Arrays are also objects internally.

Memory Representation
STACK                     HEAP
------------------------------------------------
colors ───────────────▶  ["red", "green", "blue"]

🔹 Reference Copy in Arrays
const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2.push(4);

STACK                     HEAP
------------------------------------------------
arr1 ───────────────▶  [1, 2, 3, 4]
arr2 ───────────────▶

console.log(arr1); // [1, 2, 3, 4]

🔹 Shallow Copy in Objects and Arrays
Using Spread Operator
const student = {
  name: "Alice",
  address: {
    city: "Delhi"
  }
};

const student2 = { ...student };

Memory Behavior
student2.address ─────────▶ same reference as student.address

student2.address.city = "Mumbai";

console.log(student.address.city); // Mumbai


❗ Nested objects share memory

🔹 Shallow Copy in Arrays
const arr1 = [[1, 2], [3, 4]];
const arr2 = [...arr1];

arr2[0].push(99);

console.log(arr1); // [[1, 2, 99], [3, 4]]

🔹 Deep Copy (Full Memory Separation)
Using JSON Method
const obj1 = {
  name: "John",
  address: {
    city: "Delhi"
  }
};

const obj2 = JSON.parse(JSON.stringify(obj1));

Memory Result
obj1.address ─▶ new heap memory
obj2.address ─▶ different heap memory

obj2.address.city = "Mumbai";
console.log(obj1.address.city); // Delhi

🔹 Structured Clone (Modern Way)
const copy = structuredClone(obj1);


✔ Handles nested objects
✔ Supports arrays
✔ Better than JSON method

🔹 Function Memory Storage
function greet() {
  console.log("Hello");
}


Function body stored in heap

Function reference stored in stack

🔥 Interview Keywords

Stack vs Heap

Reference vs Value

Shallow copy

Deep copy

Garbage collection

Memory leak

🧠 Common Interview Question
❓ Why changing one object affects another?

✔ Because both variables point to the same heap memory

✅ Summary
Concept	Storage
Primitive	Stack
Object	Heap
Array	Heap
Reference	Stack
Spread copy	Shallow
JSON copy	Deep