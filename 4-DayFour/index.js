// ! Number
let a=10;
let b=3.148908;
console.log(b.toFixed(2)); // ! 3.15
console.log(parseInt(b)); // ! 3
console.log(parseFloat(b)); // ! 3.148908
console.log(typeof b.toFixed(2) ); // ! string
console.log(b.toPrecision(4)); // ! 3.149
console.log(b.toString()); // ! "3.148908"

// ! Number Object
let c = new Number(10);
let d = new Number(10);
console.log(typeof a); // ! object
console.log(c==d);; // ! false
console.log(c===d);; // ! false

//! object reference checking karta hai
let obj1 ={
    value:20,
}
let obj2 ={
    value:20,
}
console.log(obj1==obj2);; // ! false
console.log(obj1===obj2);; // ! false
console.log(obj1.value==obj2.value);; // ! true

// ! Non primitive: reference ke base pe compare karta hai
// Primitive: value ke base pe compare karta hai

let e=10;
let f=e;

console.log(e==f); // ! true

// ! Math Object

// Math Object me kai sare properties and methods hote hai jo mathematical constants and functions provide karte hai
// Math.abs (): kisi number ka absolute value return karta hai
console.log(Math.abs(-8)); // ! 8

// Math.pi : pi constant ko represent karta hai
console.log(Math.PI); // ! 3.141592653589793

// Math.round (): kisi number ko nearest integer me round karta hai
console.log(Math.round(4.6)); // ! 5

// Math.ceil (): kisi number ko upar ki taraf round karta hai
console.log(Math.ceil(4.1)); // ! 5

// Math.floor (): kisi number ko neeche ki taraf round karta hai                
console.log(Math.floor(4.9)); // ! 4

// Math.SQRT2 : 2 ka square root return karta hai
console.log(Math.SQRT2); // ! 1.4142135623730951

// Math.pow (): kisi number ka power calculate karta hai
console.log(Math.pow(2,3)); // ! 8

// Math.sqrt (): kisi number ka square root calculate karta hai
console.log(Math.sqrt(16)); // ! 4

// Math.min () and Math.max (): kisi set of numbers me se minimum and maximum value return karta hai
console.log(Math.min(2,5,1,7,3));   // ! 1  
console.log(Math.max(2,5,1,7,3));   // ! 7

// Math.random (): 0 se 1 ke beech koi bhi random number return karta hai
console.log(Math.random()); // ! 0 se 1 ke beech koi bhi random number dega 
console.log(Math.floor(Math.random()*10)); // ! 0 se 9 ke beech koi bhi random number dega
console.log(Math.floor(Math.random()*100)); // ! 0 se 99 ke beech koi bhi random number dega





