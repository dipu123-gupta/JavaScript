JavaScript String – Complete & Detailed Guide
Introduction

A string in JavaScript is a primitive data type used to represent text.
Anything written inside quotes—letters, numbers, symbols, or sentences—is a string.

let message = "Hello World";

Key Characteristics of Strings
1. Primitive Type

Strings are primitive, not objects.

Stored directly as values.

2. Immutable

Strings cannot be changed after creation.

Any operation that seems to modify a string actually returns a new string.

3. Indexed

Each character has an index.

Indexing starts from 0.

4. Object-like Behavior

JavaScript temporarily wraps strings in a String object so you can use methods like .length.

Creating Strings
Single Quotes
let a = 'Hello';

Double Quotes
let b = "He said, 'Hello'";

Template Literals (ES6 – Recommended)
let c = `Hello World`;


Template literals are modern, powerful, and flexible.

String Length

The .length property returns the total number of characters.

let word = "JavaScript";
console.log(word.length); // 10

let empty = "";
console.log(empty.length); // 0

Accessing Characters (Zero-Based Indexing)
let language = "JavaScript";

console.log(language[0]); // "J"
console.log(language[4]); // "S"

Last Character
language[language.length - 1]; // "t"

String Immutability (Very Important)

Strings cannot be modified directly.

let name = "alex";
name[0] = "A"; // ❌ No effect
console.log(name); // "alex"


Correct approach:

let newName = name.toUpperCase();
console.log(newName); // "ALEX"


✔️ Original string remains unchanged.

Common String Methods
Changing Case
"hello".toUpperCase(); // "HELLO"
"HELLO".toLowerCase(); // "hello"

Finding Substrings
let sentence = "The quick brown fox jumps over the lazy fox";

sentence.indexOf("fox");      // 16
sentence.lastIndexOf("fox"); // 40
sentence.includes("jumps");  // true
sentence.includes("cat");    // false


indexOf() → first occurrence

lastIndexOf() → last occurrence

includes() → returns boolean

Extracting Substrings
slice(start, end)
let text = "JavaScript";

text.slice(0, 4);  // "Java"
text.slice(4);     // "Script"
text.slice(-6);    // "Script"


end index is exclusive

Negative indexes are allowed

substring()

Similar to slice

❌ Does not support negative indexes

substr() ❌ Deprecated

Avoid using it.

Replacing Text
let msg = "hello world, hello again";

msg.replace("hello", "hi");
// "hi world, hello again"


⚠️ Replaces only the first occurrence.

Replace All (Modern)
msg.replaceAll("hello", "hi");
// "hi world, hi again"

Trimming Whitespace
let input = "   user@email.com   ";

input.trim();      // "user@email.com"
input.trimStart(); // "user@email.com   "
input.trimEnd();   // "   user@email.com"

Splitting Strings
"apple,banana,orange".split(",");
// ["apple", "banana", "orange"]

"Hello World".split(" ");
// ["Hello", "World"]

"abc".split("");
// ["a", "b", "c"]

Template Literals (ES6)
Variable Interpolation
let name = "Alice";
let age = 30;

`Hello, my name is ${name} and I am ${age} years old.`;


Expressions are allowed:

`Next year I will be ${age + 1}`;

Multi-line Strings
let html = `
<div>
  <p>Hello</p>
</div>
`;

Summary (String)

Strings are immutable primitives

All string methods return new strings

Use template literals for modern JavaScript

Avoid deprecated methods

📘 README.md
JavaScript Date – Complete & Detailed Guide
Introduction

A JavaScript Date object represents a single moment in time.

Internally, it stores:

Milliseconds since January 1, 1970 (UTC)
This is called the Unix Epoch.

📌 A Date is not a calendar, it is a timestamp.

Creating Date Objects
Current Date & Time
const now = new Date();
console.log(now);

Timestamp (Milliseconds)
const timestamp = Date.now();
console.log(timestamp);

const date = new Date(timestamp);


This method is commonly used by servers and databases.

Creating a Specific Date (Recommended Way)
const myDate = new Date(2025, 8, 4, 6, 20, 11, 125);

⚠️ Critical Gotcha: Months Are Zero-Indexed
Month	Index
January	0
February	1
September	8
December	11

This is the #1 source of Date bugs.

Getting Date Values (Getters)
const d = new Date();

Method	Description
getFullYear()	4-digit year
getMonth()	Month (0–11)
getDate()	Day of month (1–31)
getDay()	Day of week (0–6)
getHours()	Hours (0–23)
getMinutes()	Minutes
Date Mutability (Important)

Date objects are mutable.

const d = new Date();
d.setMonth(4);


✔️ The original object is modified
❌ This can cause bugs in applications

Date Auto-Correction (Rollover)
new Date(2025, 1, 30);
// February 30 → March 2, 2025


JavaScript automatically adjusts invalid dates.

Formatting Dates for Display
const now = new Date();

Method	Use Case
toString()	Default verbose format
toDateString()	Date only
toISOString()	UTC (server communication)
toLocaleString()	Best for users
now.toLocaleString();

Common Date Problems (Interview Topic)

Months start at 0

Dates are mutable

String parsing is unreliable

Time zones are complex

Best Practice (Industry Standard)

Avoid raw Date for complex logic.
Use libraries instead:

Day.js

date-fns

Luxon

Future of Dates: Temporal API
Temporal.PlainDate.from("2025-10-01");


✔️ Immutable
✔️ Clear API
✔️ No zero-indexed months

Summary (Date)

Date stores time as milliseconds

Months are zero-indexed

Date objects are mutable

Use toISOString() for servers

Prefer modern libraries or Temporal API