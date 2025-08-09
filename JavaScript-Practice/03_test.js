// String Datatypes in JS

let name = "Aditya"; 
let repoCount = 10;
console.log(name + repoCount); // older way

//modern way - output formatting
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// ANother method of declaring strings
let branch = new String("AIDS");// object constructor
console.log(branch[0]); //stored as key-value pairs internally

// String object methods
console.log(branch.length);
console.log(branch.toLowerCase());
console.log(branch.charAt(2));
console.log(branch.indexOf('S'));

let newStr = branch.substring(0,2);
console.log(newStr)

let str = branch.slice(0,2);
console.log(str);

let str2 = "   Aditya    ";
console.log(str2);
console.log(str2.trim());

let str3 = "AIDS-YCCE";
console.log(str3.split('-'));

