console.log("Welcome in part 10");
// DOM events

// 1 onclick
// let btn = document.querySelectorAll("button");
// console.dir(btn);
// for select all btns
// for(btns of btn){
//     btns.addEventListener("click",sayHello);
//     btns.addEventListener("click",sayName);
// }

function sayHello() {
  console.log("Hello");
}

function sayName() {
  console.log("Shanker Joshi");
}

// activity.

// call back
// let p = document.querySelector(".sample");
// p.addEventListener("click",function(){
//     console.log("paragraph is clicked");
// })

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function () {
//   console.log("curson is inside div");
// });

// this in eventListeners

// btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     btn.innerText = "button";
//     console.dir(this.innerText);
//     this.style.backgroundColor = "red";
//     this.style.color = "white";
// })

let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
// let buton = document.querySelector(".btn");
let p2 = document.querySelector("p");

// buton.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })
// h3.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })
// h1.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })
// p2.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })

// keyboard events

// let btn = document.querySelector("button");
// btn.addEventListener("click", function (event) {
//   console.dir(event);
//   console.log("Button is clicked");
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function (event) {
//   console.log("code :", event.code);
//   //   console.log("keyCode:",event.code);
//   //   console.log("key was pressed");
//   if (event.code == "keyD") {
//     console.log("Arrow down is pressed");
//   } else if (event.code == "keyU") {
//     console.log("Arrow up is pressed");
//   } else if (event.code == "keyL") {
//     console.log("Arrow left is pressed");
//   } else if (event.code == "keyR") {
//     console.log("Arrow right is pressed");
//   } else if (event.code == "ArrowUp") {
//     console.log("Arrow up is pressed");
//   } else if (event.code == "ArrowDown") {
//     console.log("Arrow down is pressed");
//   } else if (event.code == "ArrowRight") {
//     console.log("Arrow right is pressed");
//   }
// });

// form event
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
// });
// console.log("Your form is submitted");
// let use = document.querySelector("#user");
// let pass = document.querySelector("#pass");
// console.log("Your username is: ",use.value);
// console.log("Your password is: ",pass.value);
// alert("Your form is submitted");
// alert(`Hii ${use.value}, your password is ${pass.value}`);
//Extracting form data
// let inp = document.querySelector("input");

// console.dir(inp);
// console.log(inp.localName);
// console.log(inp.value);

/* More events
  change event
  input event*/
// let user = document.querySelector("#user");
// // user.addEventListener("change",function()
// user.addEventListener("input", function () {
//   console.log("Input Changed");
//   console.log("Final value", this.value);
// });

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click",function(){
  console.log("div was clicked");
});

ul.addEventListener("click",function(event){
  event.stopPropagation();
  console.log("ul was clicked");
});

for(li of lis){
  li.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("li was clicked");
  });
}