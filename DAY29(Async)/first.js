console.log("Hello Async Await concept");

function meet(){
    const arr = [2,3,4];
    console.log(arr[0]);
}


function greet(){
    const a = 2+4;
    console.log(a);
    meet();
    console.log(a+a);
}

greet();
console.log("Program End");
