// question1
let para1 = document.createElement('p');
para1.innerText = "Hey, i'm red";
document.querySelector("body").append(para1);
para1.classList.add('red');

// question2
let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3";
document.querySelector("body").append(h3);
h3.classList.add("blue");

//question3
div = document.createElement('div');
div.classList.add("q3");
let h12 = document.createElement('h1');
h12.innerText = "i'm in a div";
let newP = document.querySelector('p');
newP.innerText = "ME TOO!";

div.append(h12);
div.append(newP);
console.log(div);
document.querySelector("body").append(div);