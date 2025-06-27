// // Scope ke bare me
// // these are three type of scope 1) Global 2)Local or function scope 3)Block


// let a = 23;
// var b= 39;
// const c = 34;
// var b = 45


// console.log(a);
// console.log(b);
// console.log(c);

// // Example of global scope
// function niti(){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// niti()//Above declare variable ko globaly code me kahi bhi access kar sakte hai.


// // function scope for exqmple
//  function golu(){
//     let a = 43;
//     var b = 34;
//     const c = 60;
//     console.log("Hello function");
//  }
//  golu();

//  console.log(c);//function scope me declare in function not access  out of function
 
// block scope
//  if(true){
//    let a  = 27;
//     var b= 25;
//     const c = 26;
//     console.log(a,b,c);
//  }


// console.log(a);//Not access to a,c  because a,b,c are block scope
// console.log(b);//b(Veriable) variable ko access kar sakte hai 
//Isiliye var ko  ham access nahi kar sakte hai kyuki ise kahi bhi access kar sakte hai.


// for(var i=1;i<=10;i++){
//     console.log(i);
// }

// console.log(i);

// let amount = 40;
// if(true){
//     let amount = 403;
//     console.log(amount);
// }
// // Yaha let amount ek globle scope hai and let amount block scope


// // Declare hone se pahale  ham  variable ko access nahi kar sakte 
// //for example

// console.log(c);
// let a = 49;
// var c = 45;


// greet();
// function greet(){
//     console.log("I am greet function");
// }

// // meet();
// let meet =  function(){
//     console.log("I am meet function and not access to after declaration");
// }
// meet();


// // While loop

// let j = 2;
// while(j<20){
//     console.log(j);
//     j++;
// }


// // The Do While Loop
// // The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// // Syntax
// // do {
// //   // code block to be executed
// // }
// // while (condition);
// // Example
// // The example below uses a do while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:

// // Example
// let text = ""
// let i = 0;

// do {
//   text += "The number is " + i;
//   i++;
// }
// while (i < 10);
// console.log("\n" +text);



// let arr = [12,34,56,78,90];
// for(let i = 0; i<arr.length;i++){
//     console.log(arr[i]);
// }


// Object me loop concept

const obj = {
    name:"Nitish Kumar",
    age:23,
    education:"B-tech",
    city:"Siwan",
    CGPA:6.93
}

const key = Object.keys(obj);
for(let i = 0;i<key.length;i++){
    console.log(obj[key[i]]);
}