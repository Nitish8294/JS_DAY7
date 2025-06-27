// for in loop :Array ke sath nahi lete  nahi late
// Arr is an object

const arr = [10,20,30,40,50];
arr.name = "Nitish";
arr.age = 23
for(let key in arr){
    console.log(key);
}