let num = 23;
let num2 = new Number(23);
let num3 = new Number(23);

console.log(num==num2);
console.log(num2==num3);

// console.log(num2);
// console.log(typeof num2);

let n = 123.321
console.log(n.toFixed(2));//toFixed() returns a string representation of a number with a specified number of digits after the decimal points
console.log(n.toPrecision(4));//precision ye kahata hai ki aapko total kitna digit chahiye
console.log(n.toExponential(2));//toExponential ye batata hai ki aapko decimal ke bad kitna  digit chahiye
console.log( n.toString());//to string number ko string me convert karta hai
console.log(n.valueOf());//

// Math

// console.log(Math.E);
// console.log(Math.LN10);
// console.log(Math.PI);
// console.log(Math.)

// console.log(Math.random()*10);

let  niti = 3.14;
console.log(Math.floor(niti));
// Floor function decimal ke pahale wale number ko return karta hai

console.log(Math.ceil(niti));
//ceil function  whole number ko return karta hai


// Generate the number between 0 to 9
console.log(Math.ceil(Math.random()*10));

// Generate 1 to 10 number randomly
console.log(Math.floor(Math.random()*10)+1);

// Generate 11 to 20 number  randomly
console.log(Math.floor(Math.random()*10)+11);



// Generate the 30 to 40 between number
max = 30, min = 40;
console.log(Math.floor(Math.random()*(max-min+1)+min));


// generate the number 100  to 500
console.log(Math.floor(Math.random()*(500-100+1)+100));


// Ludo game 
console.log(Math.floor(Math.random()*(6-1+1)+1));