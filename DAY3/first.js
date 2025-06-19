// Number,String,boolean, undefined,null , bigint

// Non primitive data type
// Array, object, Function, Date

// let  n = 30;
// let n1 = 34;
// let n2 = 35;

// Array concept
let arr = [23,54,67,90,64,37,80,"Nitish","Bijendra"];
console.log(arr);
console.log(typeof arr);

// Object concept
// Object are keys and value pairs
// Keys are always string
let obj = {
    account_name: "Nitish Kumar",
    account_number:2345678763,
    account_balence:34434,
    is_active:true,

}

console.log(obj.is_active);

// Function

let fun = function(){
    console.log("Function is a block of code in javascript");
}
fun();
console.log(typeof fun);

// conversion one type two another type
let account_balence = "100";
let num = Number(account_balence);
console.log(num);
console.log(typeof num);

// Boolean convert to number

let x = false;
console.log(Number(x));

let accout = "100xs";
let bal = "200xs";
console.log(Number(accout));
console.log(Number(bal));

let niti = null;
console.log(Number (niti));

let miti;
console.log(Number(miti));

let ab = 20;
console.log(String(ab));

let axx = true;
console.log( typeof String(axx));
console.log(typeof axx);

// Boolean 
 let abs = " ";
 console.log(Boolean(abs));

 console.log(((6*3)+(18/6)-9));
// 18+3-9
// Divide multiply left to Right
// Add sub left to right
// concept of Modulus 
console.log(20%3);//Modulus gives reminder
// ++ increment operator , --decrement operator
let sum = 30;
console.log(sum++);
console.log(sum);
// --sum
// sum++ post increment, sum-- post decrement
// ++sum pre increment , --sum pre decrement
console.log(--sum);
console.log(sum--);
console.log(sum);

// Assignment operator
let y = 30;
y = y+90;
console.log(("the value of")  +y);

