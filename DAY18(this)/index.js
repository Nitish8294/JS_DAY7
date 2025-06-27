// // the this keyword in javascript  is a special keyword that refers to 
// // The comtext in which the current code is being executed.
// // Its value depends on how function where this is used is called 


// // 1:Globle Context (Outsider any function)
// // In browers:window
// //In node.js:Module's object


// // 2:Inside a function
// // i:(Non-Strict Mode)
// // When this is used inside a regular function, it refers to the global object
// // Tis will be undefined inside a function.

// // "use strict"
// function greet(){
//     console.log(this)
// }
// greet();

// // Arrow functions don't have their own this.
// // Instead, they inherit this from the surrounding (lexical) scope.

// let obj = {
//     name:"Nagi",
//     age:33,
//     greet:()=>{
//         console.log(this);
//     }
// }
// obj.greet();


// Inside a Constructor or class
// In constructors and classes, this refers to the instance of the object be
class person{
    constructor(name,age){
       this.name = name;
       this.age = age;
    }
}

let a  = new person("Nitish",20);
console.log(a);