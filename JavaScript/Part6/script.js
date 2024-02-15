function hello() {
  console.log("Hello world");
}

hello();

function loop() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

loop();

function isAdult() {
  let age = 18;
  if (age >= 18) {
    console.log("You are adult");
  } else {
    console.log("You are not adult");
  }
}
isAdult();

// pq1 print a poem with the help of function
function printPoem() {
  console.log("Twinkle twinkle little star, how i wonder what you are");
}

printPoem();

// pq2 create a fun. to roll a dice and always display the value of the dice(1-6)

function rollDice() {
  let rand = Math.floor(Math.random() * 6) + 1;
  console.log(rand);
}

rollDice();

// function with arguments

function printName(name, sName) {
  console.log(`First name is ${name} and lastName is ${sName}`);
}
printName("Shanker", "Joshi");
// printName("Radha", "Joshi");
// printName("Neha", "Joshi");
// printName("Bhawna", "Joshi");
// printName("Deepa", "Joshi");
// printName("PooranChandra", "Joshi");
// printName("Ekta", "Sharma");

function sum(a, b) {
  console.log(`sum of a and b is ${a + b}`);
}
sum(10, 15);

// pq3 (Create a fun. that gives us the avg of 3 numbers)
function avg(a, b, c) {
  let avgrage = (a + b + c) / 3;
  console.log(`The avgrage of a b and c is ${avgrage}`);
}

avg(10, 5, 3);
avg(10, 50, 30);
console.log(avg);

// pq4 print table of multiplication
function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}
printTable(21);

// return keyword

function sub(a, b) {
  return a - b;
}

// even we call the fun. but it's not gives output it only return a value
sub(12, 2);
// Below line gives output
console.log(sub(12, 2));
//  new thing
console.log(sub(sub(20, 10), 5));

// pq5 create a function that returns the sum of numbers from 1 to n

function getsum(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// pq6 create a function that returns the concatination of all string

let str = ["Hii", "hello", "Bonjour", "namaste"];

function concate(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i];
  }
  return result;
}

// scope

/* there are three type of scope
  1. function scope
  2. Block scope
  3. Lexical scope
*/
// 1. Function Block
let a = "Hello";
function printHello() {
  let a = "hello";
}
console.log(a);
sum = 54; // global scope
function calSum(a, b) {
  let sum = a + b; // Function scope
  console.log(sum);
}

calSum(1, 5);

// 2. Block scope.
{
  let myName = "Shanker Joshi";
  console.log(`my name is ${myName}.`);
}
// console.log(myName); // myName is block level element which could not access after the block.

for (let i = 0; i < 3; i++) {
  console.log(i);
}

//  lexical scope
function outsideFun() {
  let x = 7;
  let y = 9;
  function innerFun() {
    console.log(x);
    console.log(y);
  }
  innerFun();
}

// global scope
let greet = "hello";
// function scope
function changeGreet() {
  let greet = "namaste";
  console.log(greet);
  function innerGreet() {
    console.log(greet); // lexical scope
  }
}

console.log(greet);
changeGreet();

// function expression

const add = function (a, b) {
  return a + b;
};

add(12, 43);

let hellow = function () {
  console.log("Hello Ji kese hai aap");
};

hellow();

hellow = function(){
  console.log("namaste");
}
hellow();

// Higher order function
function multipleGreet(func,n){
  for(let i = 1;i<=n;i++){
    func();
  }
}

//  greet = function(){
//   console.log("Hello");
// } 

// multipleGreet(greet,5);

multipleGreet(function() {
  console.log("Namaste")
},10);

// HOF return a function
function oddEvenTest(request){
  if(request=="odd"){
    return function(n){
      console.log(!(n%2==0));
    }
  }
  else if(request=="even"){
    return function(n){
      console.log(n%2==0);
    }
  }
  else{
    console.log("wrong request");
  }
}

let request = "even";
let fun = oddEvenTest(request);
fun(5);

