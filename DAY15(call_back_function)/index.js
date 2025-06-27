// // let user = {
// //     name:"Nitish",
// //     age:23,
// //     id:231,
// //     city:"Siwan",
// // }
// // // consol.log(Object.getOwnPropertyDescriptor(user,"name"))
// // Object.defineProperty(user,"name",{
// //     writable:false,
// // });
// // user.name = "Banti";
// // console.log(Object.getOwnPropertyDescriptor(user,"name"))


// // expalin for of loop
// // for of loop ko ham array ke uper lagate hai

// const arr = [11,22,33,44,55,66,77];
// let str = "Nitish Bhaiya kaise ho";
// for(let  value of str){
//    console.log(value);
// }

// Do not user for of loop in object
// const obj = {
//     name:"Nitish",
//     age :23,
//     city:"Siwan",
//     Mohalla:"Sundari",
// }

// console.log(obj);
// for(let niti of obj){
//     console.log(niti);
// }

// foreach
// let arr = [11,22,33,44,55,66,77,88];
// arr.forEach(function(num){
//     console.log(num);

// })


// arr.foreach(callBackFunction)
//  function greet(num){
//     console.log(num);
//  }
//  arr.forEach(greet);


// let arr = [11,22,44,55,66,77,88];
//  const result = arr.filter((num)=>{
//     return num%2==0;
// })
// console.log(result);

// const students  = [
//     {name:"Nitish",age:23,marks:80},
//     {name:"Bijendra",age:33,marks:50},
//     {name:"golu",age:20,marks:40},
//     {name:"Banti",age:18,marks:40},
//     {name:"Annu",age:26,marks:40},
// ]
// const result = students.filter((value) =>{
//     return value.marks>=50
// })
// console.log(result);


// maps concept 
// maps me ham value ko modify bhi kar sakte hai 
// Jabki ham filter me ham value  ko modify nahi kar sakte hai

const arr = [1,2,3,4,5,6,7,8,9];
const result = arr.map((num)=>{
    return num*num;
})
console.log(result);