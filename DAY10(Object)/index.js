// Real Life Objects
// In real life, objects are things like: houses, cars, people, animals, or any other subjects.

// Here is a car object example:



// How to create an object in JavaScript
const student = {
    0:90,
    name:"Nitish",
    Age:23,
    Gender:"Male",
    Enrollment:92201703231,
    Subjects:["Javascript","Python","Java"],
    Address:{
        Village:"Sundari",
        Police_station:"Barhariya",
        District:"Siwan",
        state:"Bihar"
    }
}

console.log(student);//Accessing the object

console.log(student.Address.District);
//Access the nested object

console.log(student.Subjects);
//Access the object property  

// ek alag tari ka se bhi object ko access kar sakte hain
console.log(student["Age"]);
// console.log(student[Enrollment]);//It is not allowed because["Enrollment"]
console.log(student[0]);//Accessing the object property using index


// Second way to create an object
//Creating an object using the Object constructor
const person = new  Object();//Another way to create to object
//Adding properties to the object
person.name = "Bijendra";
person.age = 30;
person.Occupation = "HVAC Technician";
person.Married = false;
person.Address = {
    Viilage:"Shakhe",
    Police_station:"Barauli",
    District:"Gopalganj",
    State:"Bihar"
}
console.log(person);//Accessing the object

// delete
delete person.age;
console.log(person);//accessing the object after deleting the property


// Modifying the object


person.Occupation = "Software Engineer";
console.log(person);
//Accessing the object after modifying the property


// third way to create an object
class people{
    constructor(name,age,gender){//constructor ka matlab hota hai create karna
        //construnctor ka kaam hai memory allocate karvana
        //constructor object ke property ko initialize karna
        //this  ka use karte hai object ke property ko access karne ke liye
        this.name = name;
        this.age = age;
        this.gender = gender;

    }
}

let per1 = new people("Golu",20,"Male");
let per2 = new people("Banti",18,"Male");
console.log(per1,per2);



let object = {
    name:"Mukti",
    age:28,
    Occupation:"Ac Tecnician",
    Married_status:true,
    Account_Balence:50000,
    Nature:"Aggressive",
    
}

//Object ke keys ko kaise access karte hain
//object ke keys ko access karne ke liye Object.keys() method ka use karte hain
const arr = Object.keys(object);
console.log(arr);//Accessing the keys of the object


const arr1 = Object.values(object);
console.log(arr1);//Accessing the values of the object

//Accessing the keys and values of the object 
const arr2 = Object.entries(object);
console.log(arr2);


// Assign use case
let obj1 = {a:1,b:2};
let obj2 = {c:3,d:4};
const obj3 =Object.assign({}, obj1,obj2);
const obj6 = {...obj1,...obj2};
console.log(obj6);