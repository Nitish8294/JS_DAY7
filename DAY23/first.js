// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const ornage = document.getElementById('orange');
// const green = document.getElementById('green');
// const purple = document.getElementById('purple');

// const body = document.body;
// // document.querySelector('body');


// red.addEventListener('click',()=>{
//     body.style.backgroundColor = "red";
// })


// blue.addEventListener('click',()=>{
//     body.style.backgroundColor = "blue";
// })

// orange.addEventListener('click',()=>{
//     body.style.backgroundColor = "orangered";
// })


// green.addEventListener('click',()=>{
//     body.style.backgroundColor = "green";
// })


// purple.addEventListener('click',()=>{
//     body.style.backgroundColor = "purple";
// })


// advanced concept
// const buttons = document.querySelectorAll('button');
// const body = document.body;


// buttons.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         body.style.backgroundColor = button.id;
//     })
// })


const root = document.getElementById('root');
root.addEventListener('click',(event)=>{
    console.log(event.target.tagname);
    // if(event.target.tagname === 'BUTTON')
    // document.body.style.backgroundColor=event.target.id;
    // console.log(event.target.id);
})