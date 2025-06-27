// let obj1 = {
//     a:1,
//     b:2
// }

// let obj2 = obj1;
// // shallow copy

// obj2.a = 10;
// console.log(obj2,obj1);


// // deep copy

// let obj3 =structuredClone(obj1);
// obj3.a = 20;
// console.log(obj3,obj1);



// // nested object

// const Customer = {
//     name:"Nitish",
//     age:23,
//     Mobile_Number: 8294181318,
//     Present:"Physicaly",

//     Address : {
//         Village:"Sunadri",
//         Ps:"Barhariya",
//         District:"Siwan",
//         State:"Bihar"

//     }

// }

// const user2 = Object.assign({},Customer);
// console.log(user2)
// console.log(Customer.Address.State);
// user2.Address.Village = "Mathura";
// console.log(Customer); 


// // Destructuring of an object
// let obj = {
//     name:"Golu",
//     money:230,
//     balance:30,
//     age:23
// }

// // Process of desctructuring of an object
// const{name,balance,age} = obj;
// const{name:Full_name,balance:Amount,age:Umar} = obj
// console.log(name,balance,age);
// console.log(Full_name,Amount,Umar);

// const arr = [12,34,65,76,45,86];
// const [first,second, ,third] = arr;
// console.log(first,second,third);


// const obj4 ={
//     name:"banti",
//     age:23,
//     Id:231,
//     arr:[23,4,56,60,70],
//     address:{
//         Gauv:"Hathua",
//         PS:"Barhariya",
//         Distric:"Siwan",
//         State:"Bihar"
//     }
// } 

// // const {address:{Gauv,State,}} = obj4;

// const{arr:[first]} = obj4;
// // console.log(Gauv,State);
// console.log(first);

// let user = {
//     name:"Shalu",
//     amount:420,
//      greet:function(){
//         console.log("Hello coder army");
//     },
//     meet: function(){
//           return 430;
//     }
// }

// user.greet();
// console.log(user.meet());


// prototype

const obj = {
    name:"Nitish",
    age:23,
    Amount:420,
    Education:"B-tech",
      greet:function(){
        a = 23;
        b = 34;
        c = a+b;
        console.log(c);
      }
}
console.log(obj.toString());

