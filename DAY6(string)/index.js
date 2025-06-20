// primitive data type 

// const num = 10;
// // num = 35;//this will throw an error because num is a constant
// console.log(num);

// // non-primitive data type 

// const person = {
//     id:23,
//     name:"Nitish",
//     age:23,
//     village:"Bihar",
//     isMarried:false
// }

// person.id =23;
// console.log(person);


// string in javascript
let str = "Hello Nitish Bhaiya";
let str2 = 'Bijendra is a big brother';
let str3 = `Banti is  a small brother of my family`;

let price = 80;

console.log(`price of the  tomato is ${price}  get asap`);//access of the above variable

// string concatenation 
let str1 = `hello  good morning everyone`;
let str4 = ` how are you `;
console.log(str1+str4);//Contatination process

console.log(str1.length);//find the length

console.log(str4.length);

console.log(str1.toLocaleUpperCase());
console.log(str4.toLocaleLowerCase());

// Print "hello nitish bhaiya"
console.log('"Hello nitish Bhaiya"');

// Print 'hello nitish bhaiya'
console.log("'Hello nitish Bhaiya'");

// New line me aane ke liye \n likha jata hai
let comment ="Nitish is a b-tech student bihar.\n And he guys is good behaviour in whole university ";
console.log(comment);

// escape  charactor(\)
let comment1 = "Nitish is a b-tech student bihar.\\n And he guys is good behaviour in whole university ";
console.log(comment1);


let nitish = "Bijendra";
console.log(nitish[5]);
console.log(nitish.charAt(5));


let alphabet = 'abcdeefghijklmnopqrstuvwxyz';
console.log(alphabet.toUpperCase());

let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(letter.toLowerCase());

let hero = "Hello sharukh khan";
console.log(hero.indexOf("khan"));


console.log(hero.lastIndexOf("sharukh"));
console.log(hero.includes("sharukh"));

// Extracting substrings
// slice(start,end):Extracts pair of a string.
// substring(start,end):Similar to slice but does not accept negative number.
// substr(start,length).Extract a substring of a specified length


let newstr = "Hello Bijendra";
//   -10,-9,-8,-7,-6,-5,-4,-3,-2,-1
console.log(newstr.slice(-5,-9));
// slice can take negative index also
console.log(newstr.substring(2,5));


// Replacing contant
// Replace(oldSubstring,newSubstring):Replaces the first match.
// replaceAll(oldSubstring,newSubstring):Replaces all matches(ES2021+)


let strn = "hello bhaiya kaise ho hello hello ";
console.log(strn.replace("hello","Good Morning"));
console.log(strn.replaceAll("hello","Good morning"));


// splitting strings
// split(delimiter):splits a string into based on n delimiter.


let str11 = "Money!Honey!sunny!banny";
console.log(str11.split("! "));


// Trimning
// trim():Remove whitespace from both ends.
// trimStart()/trimEnd():Removes whitespace from the start or end.
// trim :trim starting aur ending vale space ko hta deta hai
let str12 = "  Hello ji  ";
console.log(str12.trim());

console.log(str12.trimStart());

// NEw way to create string
let lasteststring = new String("Hello Bijendra bhaiya god bless you");
console.log(lasteststring);
console.log(typeof lasteststring);
