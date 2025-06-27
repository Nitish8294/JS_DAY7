//reduce

// const arr = [12,34,66,87,54];
// // const result = arr.reduce(callback function,initialization)

// const result = arr.reduce((acc,curr)=>{
//     console.log(acc,curr);
//     acc = acc+curr;
//     return acc;
// },0)
// console.log(result);

let arr = ["Apple","Orange","Banana","Apple","Orange","Banana","Apple","Orange"];
// final result ek object ke form orange

const result = arr.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else 
        acc[curr]=1;
    return acc;
},{})

console.log(result);



