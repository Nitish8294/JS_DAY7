let a = 20;
let b = a;
b = 30
// console.log(b);
console.log(a);
console.log(b);
// primitive data type vs non primitive data type
// primitive data type is Immutable.(Non changeble)
// Non primitve data type is Muttable.(Changeble)

// object example

let obj1 = {
    id:20,
    name:"Nitish",
    couser:"B-tech"
}

let obj2 = obj1;
obj2.id = 40;
console.log(obj1);
console.log(obj2);

