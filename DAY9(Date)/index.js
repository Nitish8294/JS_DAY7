// // // Below line of code  date batata hai
// // const d = new Date();
// // console.log(d);

// // //ager date ko time aur date  print karna hai to  below line of code

// // console.log(d.toDateString());
// // //it will print the date in string format

// // console.log(d.toString());
// // //ye line of code date ko string format me print karega
// // console.log(d.toTimeString());  



// // const date = new Date();
// // console.log(date);

// // // Ager hame sirf date chahiye 
// // console.log(date.getDate());

// // //Ager hame sirf month chahiye 

// // console.log(date.getMonth());


// // // Ager hame sirf day chahiye 
// // console.log(date.getDay());


// // //Ager sirf hame month chahiye
// // console.log(date.getSeconds());

// // // Ager hame sirf Year chahiye
// // console.log(date.getFullYear());


// // console.log(date.getTime());


// const date = new Date(2025,3,20,6,50,34,5839);
// // Number: 0 based se start honge
// // String: 1 based se start honge

// console.log(date.toString());
// console.log(date.getFullYear());

// // Date calculation
// const date1 = new Date();
// const date2 = new Date("2025-06-12");
// console.log(date2-date1);
// // Difference between dates

//Countdown Timer for olampic
// Days,hours,munutes,secounde


const date5 = new Date();
const date6 = new Date("2028-08-14T00:00:00");
const date = date6 - date5;
const days = Math.floor(date/(1000*60*60*24));
const hours = Math.floor((date/(1000*60*60))%24);
const minutes = Math.floor(date/(1000*60)%60);
const seconds = Math.floor((date/1000)%60);
console.log(`Olympics CountdownTimer:days:${days},hours:${hours},minutes:${minutes},seconds:${seconds}`);





