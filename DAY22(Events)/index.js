/*Events are things that happend in the system you are programming.
Which the system tells you about so you code can react them 
For Example:If th euser clicksa button on a webpage, you might
want to react to that action by displaying an information box.
In this article we  discuss some important
concepts surrounding events and look at the fundamental
 of how they work in browsers.

*/


const button = document.querySelectorAll('button');

button.addEventListener('click',()=>{
    // Read the data
    const input1 = document.getElementById('first');
    const number1 = Number(input1.value);
    const input2 = document.getElementById('second');
     const number2 = Number(input2.value);

     const result = number1+number2;
     const re = document.getElementById('result');
     re.textContext = result;
});