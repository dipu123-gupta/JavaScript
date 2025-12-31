
// //! String

// let str1="Dipu";
// let str2='Dipu kumar';
// let day=18;
// let str3=`My name is Dipu Kumar  ${day} days have passed`;
// console.log(str1,str2);
// console.log(str3);

// //! check string methods
// //! check length of string
// console.log(str3.length); //! string length 
// convert string to upper case and lower case
// console.log(str3.toUpperCase()); //! string to upper case
// console.log(str3.toLowerCase()); //! string to lower case

// //! searching in string and extracting part of string returning string index
// console.log(str3.indexOf('Dipu'));  //! string index of 

// //! extracting part of string and returning new string
// console.log(str3.slice(11,15)); //! string slice 
// console.log(str3.slice(-3,-7)); //! string slice with negative index

// //! replace and includes
// console.log(str3.replace('Dipu','Raju')); //! string replace

// //! check includes in string 
// console.log(str3.includes('Kumar')); //! string includes
  
// console.log(str3.substring(2,7));

// ! Split and Join 
// let name="dipu,sonu,nitish,raju";
// //!let name="dipu,sonu,nitish,raju"
// let names=name.split(',');
// let newNames=names.join(' ');
// console.log(newNames);
// console.log(names);
 


// console.log(str3[3]);

//! date and time

let now=new Date();
console.log(now); //  ! 2025-12-31T07:03:46.210Z
console.log(now.getFullYear()); // ! 2025
console.log(now.toString()); // ! 2025-12-31T07:03:46.210Z
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
// console.log(now.getDay());
console.log(now.getMonth());
console.log(now.getDate());








