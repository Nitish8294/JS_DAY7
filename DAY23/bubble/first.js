const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// event bubbling and event capturing

child.addEventListener('click',(event)=>{
    console.log('child clicked');
      console.log(event.target);
},true)

parent.addEventListener('click',(event)=>{
    console.log('parent clicked');
    console.log(event.target);
},true)

grandParent.addEventListener('click',(event)=>{
    console.log('grandPrent clicked');
    console.log(event.target);
},true)


// event delegation