// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

// Itself definition:Function  jo kam bar bar ho use funtion ke under me likhate hia


// Example se samajhate hai
// console.log("Hello Nitish");
// console.log("Hello Bijendra");
// console.log("Hello Golu");
// console.log("Hello Banti");

// function nitish(){
//     console.log("Hello Bacho aap sab kaise ho");
//     console.log("Sab tik hai na ");
//     console.log("aap sabko coding karni hai na");
//     console.log("Acha aap sabko coding karni hai to aap sabko function ke bare me padhani hai");
// }
// nitish();//is line of code ko function call kahate hai


// // Add progrma
// //num1 and num2 are parameters
// //Function declaration
// function sum(num1,num2){
//     console.log("Sum of two number is:" +(num1+num2));

// }
// // Yaha per mai arguments pass kar raha hoon
// sum(34,67);//function call


// function Multiply(num3,num4){
//     return num3*num4;
// }
// console.log("Multiplication of the two number is:" + Multiply(8,5));



// const fun = function(){
//     let obj = {
//         name:"Nitish",
//         age:23,
//         address:{
//             Gauv:"Sunadari",
//             Police_station:"Barhariya",
//             District:"Siwan",
//             State:"Bihar"
//         }
        
//     }
//     console.log(obj);
//     return
  
// }
// fun();

// // important :Function jo hai vo heap memory me store hota hai
// // function ke under me jo bhi likha hai vo stack memory me store hota hai


// // Arrow function
// const funtion = ()=>{
//     console.log("Hello Nitish Kumar");
// }
// funtion();

// // Another way to create Arrow function
// const addition = (a,b)=>a+b;
// console.log(addition(23,45));

// const cube = number => number*number*number;//Its a type of function
// console.log(cube(3));

// Rest operator in function
const sum = function (...number){
    console.log(number);
   

}
sum(23,45,65);
sum(65,46,98,90);

const obj = {
    Name:"Nitish",
    Id:231,
    Age:23,
    IQ:2,
    Married:"False"
}

// Destructuring process in the below line
function fun({Name,Married}){
    console.log(Name,Married);

}
fun(obj);