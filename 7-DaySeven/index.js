//! object
//! key: value
// const person = {
//   name: "John",
//   age: 30,
//   email:"john@example.com",
//   city: "New York"
// };

// console.log(typeof person);

// //! Accessing object properties
// console.log(person.name); // John

// //! CRUD Operations: Create, Read, Update, Delete

// //! Create
// person.country = "USA"; // Adding a new property
// console.log(person);

// //! update
// person.age = 31; // Updating an existing property
// console.log(person);

// //! Delete
// delete person.email; // Deleting a property
// console.log(person);

//  ! Looping through an object
// for (let key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

// const person = {
//   name: "John",
//   age: 30,
//   email:"john@example.com",
//   city: "New York"
// };

// const person2=person; // reference copy
// person2.age=35;
// console.log(person2);
// console.log(person); // person.age is also 35 due to reference copy

// //! Accessing keys and values
// console.log(Object.keys(person2)); // ['name', 'age', 'email', 'city']
// console.log(Object.values(person2)); // ['John', 35, 'john@example.com', 'New York']

// //! destructuring of object
// const {name, age}=person2;
// console.log(name, age); // John 35

//! destructuring of array
// const colors = ["red", "green", "blue"];
// const [firstColor, secondColor]=colors;
// console.log(firstColor, secondColor); // red green 

//! for of loop array iteration
// const person = {
//   name: "John",
//   age: 30,
//   email:"john@example.com",
//   city: "New York"
// };

//! Accessing keys of object using for of loop
// let keys=Object.keys(person);
// for(let key of keys){
//     console.log(key);
// }
    
// //! Accessing values of object using for of loop
// for(let value of Object.values(person)){
//     console.log(value);
// }

// //! Accessing entries of object using for of loop
// for(let [key, value] of Object.entries(person)){
//     console.log(`${key}: ${value}`);
// }

// ! object ke under function bhi create kar sakte hai

// const person = {
//   name: "John",
//   age: 30,
//   email:"john@example.com",
//   city: "New York",
//   greeting : function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// };
//! this keyword ka use karke hum object ke andar ke properties ko access kar sakte hai

//! Calling the greeting function
// const v = person.greeting();
// console.log(v);

// ! nested object 
const student = {
  name: "Alice",
  age: 22,
    address: {
    street: "123 Main St",
    city: "Wonderland",
    zip: "12345"
  },
};

// //! Accessing nested object properties
// console.log(student.address.city); // Wonderland


const student2 ={...student}    // shallow copy
// student2.name="Bob"
// console.log(student2);
// //! origenal object me koi change nhi hoga
// console.log(student);

student2.address.city="New City"
console.log(student2);
console.log(student);


// console.log(student2.address.city);
