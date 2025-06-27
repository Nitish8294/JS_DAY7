let obj1 = {
    name:"Nitish",
    age:23,

}

let obj3 = {
    amount:100,
    money:200,

}

obj3.__proto__ = obj1;//inherit the properties of obj3
console.log(obj1.age);

let arr = [21,34,55,44,66,77];
console.log(arr.__proto__==Array.prototype);//true
console.log(arr.__proto__.__proto__ == Object.prototype);//true
console.log(arr.__proto__.__proto__.__proto__ ==null);//true
 