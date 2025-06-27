// // function attach(contet){
// // const cret = document.createElement('li');
// // cret.innerHTML = contet;
// // const element2 = document.createElement('li');
// // element2.innerHTML = contet+"V2.0";

// // const parent = document.getElementById('root');
// // // parent.appendChild(cret);
// // // parent.append(cret,element2);
// // }

// // attach('React');
// // attach('Node');
// // attach('CN');
// // attach('Express');



// // // ************** TextNode********
// // const element = document.createTextNode("Hello Bhaiya Kaise ho Aap sab");
// // const parent  = document.getElementById('root');
// // parent.append(element);



// // *************Attribute**********


// // Accessing  to the first list
// // const element = document.createAttribute("id");
// // element.value = "Last";
// // const curr_list  = document.querySelector('li');
// // curr_list.setAttributeNode(element);

// // Access  to second list

// // let parent = document.getElementById('root');
// // // parent.children[1].setAttributeNode(parent);


// // Accessing attribute of the class
// let niti = document.getElementById('root');
// niti.getAttribute("id");
// niti.setAttribute("Custom","30");
// niti.setAttribute("class","Rohan");
// // niti.removeAttribute("custom");


// // ************* Add node to the DOM*******

// const parant = document.getElementById("root");
// const golu = document.createElement('li');
// golu.innerHTML = "TS";
// parant.prepend();

// // const child2 = parent.children[1];
// // parent.insertBefore(golu,child2);

// parent.replaceChild(golu,child2);

// const parent = document.getElementById("root");
// parent.innerHTML +="<li>TS</li>";


const parent = document.getElementById("root");
 const element = document.createElement('div');
 element.innerHTML = "Hello bhaiya";


 parent.innerAdjacentElement("afterend",element);
