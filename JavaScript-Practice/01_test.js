 console.log("Hello World")

 //Variable in js
 const var1 = "Aditya";
 let var2 = "Roy";
 console.table([var1,var2]);

 // Datatypes in JS
let name = "Aditya";
let age = 18;
let isLog = false;
let state = null; // no value assigned
//object model DOM
console.table([name,age,isLog,state]);
console.log(typeof age);
console.log(typeof(state)); // not null but object
console.log(typeof undefined);

//Data Type conversion in JS
//let score = "33"; 
let score = "33bc"
console.log(typeof(score));
let value = Number(score);
console.log(typeof value); // type of NaN is number
console.log(value); // gives NaN since bc cannot be converted

// string to bool => true 
// null string to bool => false

let num = 33;
let str = String(num);
console.log(typeof str);
console.log(str); //num to string


/*
Types of Data Types : based on how they are stored in memory and accessed

Primitive - call by values( changes not reflected in actual memory , it gives a copy when accessed)
String,Number,Boolean,null,undefined,Symbol,BigInt

Non-Primitive - call by reference(directly access the memory block and changes are made actually)
Array,Objects,Functions

JS is dynamically typed since we dont have to define datatypes. It is decided directly by it.
*/


