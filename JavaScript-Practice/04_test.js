// Maths and Random in JS

let num1 = 400;
let num = new Number(200); // class constructor method  still it is a primitive datatype
console.log(num);

//Class Methods for Number
console.log(num.toString().length);
console.log(num.toFixed(2));

num1 = 123.896;
console.log(num1.toPrecision(3)); //rounds upto significant input number
num = 1000000000; // 
console.log(num.toLocaleString('en-IN'));

// Math Module in JS (default imported)
// Math class is there and using its object we can access its methods.
console.log(Math.abs(-2));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4, 5, 6,8));

// Math.random()
console.log(Math.random());// between O and 1 both inclusive



