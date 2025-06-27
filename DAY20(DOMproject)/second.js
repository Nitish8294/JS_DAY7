const id = document.querySelector('#first');
id.innerHTML = "Marwadi university";

const id2 = document.querySelector('.header2');
id2.style.backgroundColor = "Red";
 

// How to iterate over Node List

//const obj = document.querySelectorAll('.header1')  

// Object.forEach((val)=>{
//     console.log(val);
// })


// 2: for(let val of obj)

// console.log(val) 

// 3:
// //for (i = 0; i<=lenght;i++)
//    obj[i].style.color = "red"; 


// Convert Nodelist iinto Array
// Array.from(obj)



// concept:Multiple Elements:
// Method:document.querySelectorAll(selector)
// Description:Returns a static Nodelist  of all elements matching the 
// specified css selector

// Concept :Accessing By tag Name
// MEthod:Document.getElementByTagName(tagName)
// Description:Returns a live  HTMLCollection of all elements with the  specified tag name(e.g.,div,p,a)


// *****************************


const obj=document.getElementsByTagName('h1');
console.log(obj);


// 1:for(let i = 0;i<listCollection.length;i++)
// listCollection[i].style.color = "black";

// 2:for(let al of team)
// console.log(val)

// 3:Array.from(team).forEach(val)=>{
//    console.log(val);    
// }}


// const list = document.querySelector('li');
// console.log(list.parentNode);

 const par = document.querySelector('ul');

 console.log(par.childNodes);