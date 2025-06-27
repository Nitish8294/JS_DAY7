// // System clock  = time determine by the sysytem 

// const arr = [23,443,56,87,56,43,"Nitish","Banana","Virat"];
// console.log(arr.length);//Find the length of the array
// console.log(arr[0]);//Access the first element of the array
// console.log(arr[arr.length-1]);//Acces the last element of the array

// console.log(arr.at(3));
// // at is the new method to access the element of the arraycon

// console.log(arr.at(-1));
// //last vale element ko access kar sakte hai 


// const newArr = arr;
// console.log(newArr);


// // push the element in the array

// arr.push("sachin tendulkar");
// console.log(arr);

// //Pop the last element of the array

// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

// // unshift  ,add element at start of the array
// arr.unshift("Indu Devi");
// console.log(arr);

// //shift, delte element from the start of the array
// arr.shift();
// console.log(arr);

// // delete
// delete arr[1];
// console.log(arr);


// // Ager kisi element ka index pata karna ho to uska indexof() method use karte hai
// console.log(arr.indexOf(56));


// // Koe element  array me hai ki nahi uske liye includes() method use karte hai

// console.log(arr.includes("Viray"));


// // slice() method se array ke kisi part ko nikal sakte hai
// console.log(arr.slice(1,4));

// // Splice() method se array me kisi part ko nikal sakte hai
// console.log(arr.splice(2,5)); 


// arr.splice(2,3,"Dhoni","Jadeja","Rohit");
// console.log(arr);

// // convert array to string
// console.log(arr.toString());
// console.log(arr.join("$"));
// //join() method se array ke elements ko kisi string se join kar sakte hai



// concatenation of arrays

let arr1 = [2,4,6,85,44];
let arr2 = [76,46,87,43,78];
console.log(arr1.concat(arr2));
// concat method se do array ko jod sakte hai

arr1 .push(arr2);
console.log(arr1);


// 2d arrays

let arr32d =[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr32d[1][2]);
//Accessing 2d array element  


//check if an array is an array or not
console.log(Array.isArray(arr2));
//Array isArray() method se check kar sakte hai ki koi value array hai ya nahi