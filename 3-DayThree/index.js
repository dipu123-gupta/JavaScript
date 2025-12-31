// ! Operater
// Arithmetic Operater

// console.log(5+9);
// console.log(5*9);
// console.log(5-9);
// console.log(5/9);
// console.log(5%9); //! return remender

// ! Assignment Operater
// let x = 20;
// let y=10;
// x=x+y; //! x+=y
// x=x-y; //! x-=y
// x=x*y; //! x*=y
// x=x/y; //! x/=y
// x=x%y; //! x%=y
// console.log(x);

// ! omparision Operater
// let a=10;
// let b=20;
// console.log(a>b);  //! false
// console.log(a>=b);  //! false
// console.log(a<b);   //! true
// console.log(a<=b);   //! true
// console.log(a==b);   //! false
// console.log(a===b);   //! false , check type and value dono sahi rahega to true return karega nahi to false return hoga

// ! type check (dono sase type ke hona chahiye ===, uske bad wo camparision karega )

//! number and string camparision (string convert number)
// let a="120";
// let b=Number(a);
// console.log(b);

// let a="120gh";
// let b=Number(a);

// console.log(b);
// NaN: Not a number (Type of it is number)

// let num=true;
// let num1=false;
// console.log(Number(num)); //! output 1
// console.log(Number(num1));  //! output 0

// console.log(Number(null));  //! output 0
// console.log(Number(undefined));  //! output NaN

//! Number to string
// let a = 10;
// let b=String(a); 
// console.log(b);

// ! chalenge 

// let a=0.4;
// let b=0.2;
// let x=a+b;

// console.log(a==b);
// console.log(x);

// ! <,>,<=,>= (nill-->number,undefined-->NaN)

// console.log(null>=0);  // ! true
// console.log(null>0);  // ! false
// console.log(null<=0); // ! true
// console.log(null<0);  // ! false
// console.log(null>=undefined);  //! false
// console.log(null==0);  // ! false


// ! loop kaise kam karta hai

// post increment i++
// pre increment ++i

// ! for loop
// Initialization: let i = 1; (Start a counter at 1)
// Condition: i <= 5; (Keep looping as long as i is less than or equal to 5)
// Final-Expression: i++; (After each loop, add 1 to i)

// for (let i = 1; i <= 5; i++) {
//   console.log("This is repetition number:", i);
// }

// ! while loop

// let playerHealth = 10;

// while (playerHealth > 0) {
//   console.log(`Player health is ${playerHealth}. Attacking monster!`);

// //!   Inside the loop, we must change the variable to avoid an infinite loop
//   playerHealth -= 3; // Player takes 3 damage

//   if (playerHealth <= 0) {
//     console.log("Player has been defeated!");
//   }
// }

// ! do while loop
// let i = 0;
// do {
//     console.log(i);
//     i++;

// } while (i < 10)

// ! if statement 
// let temperature = 30;

// if (temperature > 25) {
//   console.log("It's a hot day! Wear shorts.");
// }

// Code continues here...

// ! if else statement

// let age = 16;

// if (age >= 18) {
//   console.log("You are old enough to vote.");
// } else {
//   console.log("You are not old enough to vote yet.");
// }

// ! if..else if..else chain

// let score = 85;
// let grade;

// if (score >= 90) {
//   grade = 'A';
// } else if (score >= 80) {
//   grade = 'B';
// } else if (score >= 70) {
//   grade = 'C';
// } else if (score >= 60) {
//   grade = 'D';
// } else {
//   grade = 'F';
// }

// console.log(`Your grade is: ${grade}`);