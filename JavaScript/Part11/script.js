// call stack
function hello() {
  console.log("Inside hello func");
  console.log("Hello");
}

function demo() {
  console.log("Calling hello func");
  hello();
}
console.log("Calling demo fnx");
demo();
console.log("Demo bye");

//Visualizing the call stack
function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}

three();

// breakpoint (Again watch video)

// JS single threaded
// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b);

// sychronus function (dono settimeout ek sath execute ho jayege time ka pta bhi nahi chlega)
// Iss condition se bachne ke liye callback hell ka use kiya jata hai. TRY WITH ANOTHER EXAMPLE
// setTimeout(function () {
//   console.log("shanker joshi");
// }, 2000);

// setTimeout(function () {
//   console.log("Radha joshi");
// }, 2000);

// console.log("hello...");

h1 = document.querySelector("h1");
function changeColor(color, deley,nextColorChange) {
  setTimeout(() => {
    h1.style.backgroundColor = color;
   if(nextColorChange) nextColorChange();
  }, deley);
}

// call back nesting -> callback hell
changeColor("red",1000,() =>{
    console.log("red color changed");
    changeColor("orange",1000,()=>{
    console.log("orange color changed");
        changeColor("green",1000,()=>{
    console.log("green color changed");
            changeColor("blue",1000,()=>{
    console.log("blue color changed");
                changeColor("yellow",1000);
            });
        });
    });
});
// setTimeout(() => {
//     h1.style.backgroundColor = "brown";
//     h1.style.color = "white";
// }, 1000);

// setTimeout(() => {
//     h1.style.backgroundColor = "red";
//     h1.style.color = "white";
// }, 1000);

// setTimeout(() => {
//     h1.style.backgroundColor = "yellow";
//     h1.style.color = "white";
// }, 1000);

// shorcut of above code
// changeColor("red", 1000);
// changeColor("brown", 1000);
// changeColor("black", 1000);
// changeColor("yellow", 1000);
// changeColor("green", 1000);


// PROMISES
