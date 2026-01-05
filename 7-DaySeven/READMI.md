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