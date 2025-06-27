/*In javaScript A maps  is  a collection of key-value pairs where both  the
 keys and the value can be any data type(primitive or Object).Unlike regular 
 JavaScript objects, A maps maintains the Order of its elements based on  insertion 
 and allows keys of any type (even objects,function and primitive types),whereas objects 
 only allow string or symbols as keys

 set(key,value)
 get(key)
 has(key)
 delete(key)
 clear()
 Size
 for(let[key,value] of maps{console.log(key,value);})

 map.forEach(value,key)=>{console.log(key,balue);}

*/

// let map = new Map();
// map.set(23,44);
// map.set("Nitish",18);
// console.log(map);
// map.delete(1);// Delete the maps in the first element

// console.log(map);
// console.log(map.has("Nitish"));
// console.log(map.size);

const maps1 = new Map([
    [1,"Nitish Kumar"],
    ["Mohan","Rohan","Sohan"],
    [30,40]
])
for(let [key,value] of maps1){
    console.log([key,value]);
}

