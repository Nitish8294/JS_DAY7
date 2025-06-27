// let obj = {
//     name:"Nitish",
//     age:23,
//     gender:"Male",
//     city:"Siwan"
// };
// // // for in loop , I can iterator over keys in an object
// // for(let niti in obj){
// //     console.log(niti,obj[niti]);
// // }

// // object.keys(obj)

// let obj2 = Object.create(obj);
// obj2.money = 420;
// obj2.id = 231;
// console.log(obj2);
// // console.log(obj2.name);
// for(let key in obj2){
//     console.log(key,obj2[key]);
// }

//  let  obj4 = {};
 
//  obj4.name = "Bijendra Kumar";
//  obj4.age = 30;
// //  key value writable enumerable congigurable

// console.log(Object.getOwnPropertyDescriptor(obj4,'name',obj4,'age'));


// //writable = true , then value ko change kar sakte hai
// obj4.name = "Golu"
// console.log(Object.getOwnPropertyDescriptor(obj4,'name',obj4,'age'));

// // configurable ka value true hai to aap  writable enumerable ka value change kar sakte hai


// let mit = {};
// Object.defineProperty(mit,'name',{
//     value:"Banti kumar",
//     writable:true,
//     enumerable:true,
//     configurable:true,
// })


// obj.name = "Mit";
// console.log(mit);


// const obj1 = {
//     name:"nitish Kumar",
//     age:23,
//     account_number:123,
//     city:"Siwan",
// }
// Object.defineProperty(obj1,'account_number',{
//     writable:false
// })

// obj1.account_number = 231;
// console.log(obj1.account_number);


const customer = {
    name:"Nitish Kumar",
    age:23,
    Mobile_Number:8294181318,
    Account_Number:321,
    balence:34424,
}
// customer.name = "Golu Kumar";
// console.log(customer.name);

// // name ,mobile number and account_number chnage nahi hone chahiye
// Object.defineProperty(customer,'name',{
//     writable:false,
// })
// customer.name = "Golu Kumar";
// console.log(customer.name);


// jis bhi key ka enumerable true hoga ,us sabka access hoga print 
// Inherit  hoke bhi koi property or key aati hai, uska enumerable true


let customer2 = Object.create(customer);
customer2.city = "Siwan";
customer2.place = "Bihar";
Object.defineProperty(customer,"age", {
    enumerable:false,
})

for(let  key in customer2){
    console.log(key);
}