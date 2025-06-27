// // A set in a javascript is a collection of unique values.It allows you to store  values without duplicates
// //which makes it  diffrent from arrays. the values in a set  can be of any type, such as 
// // primitives(numbers,string,etc) or objects
// // .Add
// // .Delete
// // .Has
// // .Size
// // .Clear

// const set1 = new Set([10,20,30,40,50,20]);
// console.log(set1);
// console.log(typeof set1);//object jaha per new dikh gya samajhjana ki vo object hai 

// // set1.add(66);
// // set1.delete(10);
// set1.delete(66);
// console.log(set1);

// const set2  = new Set();
// set2.add(18);
// set2.add("Virat Kohli");
// set2.add(7);
// set2.add("Rohit Sharma");
// set2.add(97);
// set2.add("Jasprit Bumrah");
// console.log(set2);
// console.log(set2.size);//find size of set

// // has property in set
// // Instagram id
// const user_id = new Set(["nitish_@123","Golu_123","Banti__45","Bijendra_07"]);
// let new_user = "nitish_@123";
// console.log(user_id.has(new_user));
// user_id.clear();//Is statement se  set clear hota hai
// console.log(user_id);


// convert array to set because  array containt dubplicate value
// const arr = [12,34,55,66,77,88,33,55,66];
// const set_1  = new Set(arr);
// console.log(set_1);

//Du set ka uniun kar ke batao
// let set = [12,34,56,78,90,11];
// let set2= [10,20,30,40,50];
// let set3 = new Set([...set,...set2])
// console.log(set3);


// //Find the intersection
// let set = [10,20,30,40,50];
// let set2 = [10,20,34,40,32];
// const result = [...set].filter((num)=>set2.has(num));
// console.log(result);


// Iterate over set it  use for of loop
let set = [10,20,30,40,50];
for(let niti of set){
    console.log(niti);
}

