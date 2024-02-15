console.log("Today's lecture started form string methods");
console.log("So let's get started. string are immutable in js");


//trim method
let str = "       Shanker";
console.log("str before trim: ");
console.log(str);
console.log("str after trim: ");
let str2 = str.trim();
console.log(str2);


// toUppercase and toLowercase
str = "Shanker";
str2 = str.toUpperCase();
str2 = str.toLowerCase();


// indexOf
str = "ShankerJoshi";
str2 = str.indexOf("Joshi");
str2 = str.indexOf("Shanker");


//chaining in methods
str = "ShankerJoshi         ";
// str2 = str.trim().toUpperCase();
str2 = str.trim().toLowerCase();


// replace method
str = "ShankerJoshi";
str2 = str.replace("Joshi", "sonu");


// repeat method
str2 = str.repeat(3);


// practiceQuestion in pq.js file.
str2 = str.slice(7);
str2 = str.slice(7, 10); // go from start to n-1


// Array started form here
console.log("Arrays are mutable in js");
// normal  way
let name1 = "Shanker";
let name2 = "Ekta";
let name3 = "JoshiJi";

let specialArray = ["Shanker", "Ekta",32,23,3.3];
console.log(specialArray);
// with The Help Of Array.
let arrayName = ["Shanker", "Ekta", "JoshiJi"];

// let num = [2,4,6,7,8,9];
let num = [];


// Arrays method started
/* push,pop, unshift,shift,includes,indexOf,concat,reverse,slice,splice and more... */

name1 = ['S','h','a','n','k','e'];
name1.push('r');
// name1.push('j');
// name1.push('o');
// name1.push('s');
// name1.push('h');
// name1.push('i');
// name1.pop();

// add from first place.
name1.unshift('e'); 

// remove form first place.
name1.shift();


// Array method (indexOf)
specialArray.indexOf("Ekta");
specialArray.indexOf("Ekta");
specialArray.indexOf(23);
specialArray.indexOf(3); 
// return -1 because 3 is not in this array.
specialArray.indexOf(3.3);


// Concate method in array.
let concatArray = specialArray.concat(arrayName);


// includes method in js (It search for a value which is present in the array)
specialArray.includes("Shanker");
specialArray.includes("Ekta");
specialArray.includes("Radha"); // gives false value bcz Radha is not in specialArray list.


// reverse method 
let reversedArray = specialArray.reverse();


// slice method (ye copies bnata hai. orignal array same rhta hai. )
let color = ["red","blue","purple","gray","yellow"];
color.slice();
color.slice(2);
color.slice(-2);
color.slice(1,4);


//  splice method  in js (very important)
color.splice(1); // (remove/replace/add)
color.splice(0,1); // delete index 0 to 1 is not included
color.splice(0,1,'apple','banana','mango');

// Array Refrence

// [1] == [1] // false
// [2] === [2] // false
/*
now we can perform all opration in it.
like push,pop,shift,unshift,splice,slice and etc.
*/

let arr = ['a','b'];
let arrCopy = arr;
arrCopy.push('c');


// Nested Arrays
num = [[2,4],[3,5],[4,6]];