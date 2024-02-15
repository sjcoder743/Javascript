console.log("Shanker Joshi1");
console.log(1);
console.log(9+1)
console.log("Apna", "College", 123);

// template litrals
let b = 6;
let a = 4;

// console.log("The sum of", a+b,"Rupee.");
console.log(`You pay ${a+b} rupees.`);

// operation in js
// airthmatic operation
a = 10;
b = 5;
console.log(`The sum of ${a} and ${b} is ${a+b}.`);
console.log(`The sub of ${a} and ${b} is ${a-b}.`);
console.log(`The multiplication of ${a} and ${b} is ${a*b}.`);
console.log(`The devision of ${a} and ${b} is ${a/b}.`);

// unary operator
console.log(a++);
console.log(++a);
console.log(++b);
console.log(--b);

// Assignment operator
a+= 5;
console.log("The value of a after assignemnt operator is :",a);
// Comparison operator
console.log(a>b);
console.log(a>=b);
console.log(a<=b);
console.log(a<b);
console.log(a!=b);
// Logical operator
console.log("Logical AND operator");
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

console.log("Logical OR operator");
console.log(true  ||true);
console.log(false || true);
console.log(true  ||false);
console.log(false || false);

console.log("NOT operator");
console.log(!(true));

let n = 5;
let str = '5';
console.log(typeof(n));
console.log(typeof(str));
console.log(n==str);
console.log(n===str);
console.log('A' > 'B');
console.log('A' < 'B');

//Conditional statement 
//if else.
let age = 12;
if(age>18){
    console.log("You are eligible for driving.");
    console.log("Your age is 33+");
    console.log("you are 42 now");
}
else{
    console.log("you are not eligible for driving and voting");
}

// if else if ladder

let marks = 92;
if(marks<33){
    console.log("Your grade is : P");
}
else if(marks<60 && marks>=33){
    console.log("Your grade is : A+");
}

else if(marks<=80 && marks>=60){
    console.log("Your grade is : A");
}
else if(marks>=90){
    console.log("outstanding grade");
}
else{
    console.log("Fail");
}

// switch.
let month = "May";
switch(month){
    case "Jan" : 
        console.log("January");
        break;
    case "Feb" : 
        console.log("Febuary");
        break;
    case "Mar" : 
        console.log("March");
        break;
    case "Apr" : 
        console.log("April");
        break;
    case "May" : 
        console.log("May");
        break;
    case "Jne" : 
        console.log("June");
        break;
    case "July" : 
        console.log("July");
        break;
    case "Aug" : 
        console.log("August");
        break;
    case "Sep" : 
        console.log("September");
        break;
    case "Oct" : 
        console.log("October");
        break;
    case "Nov" : 
        console.log("November");
        break;
    case "Dec" : 
        console.log("December");
        break;
    default : 
        console.log("Wrong choice");
        break;
}

// alert("This is shanker joshi");
// prompt("Please Enter your Number : ");
// alert("your number is");

console.log("This is a simple log");
console.error("This is error.");
console.warn("This is warning");
console.info("This is information");