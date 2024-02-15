// Here we are learning DOM. and in this part we are exploring selection Elements in console window

// we can same do as getElementById

// This is getElementsByClassName
let smallImg = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImg.length; i++) {
  console.dir(smallImg[i]);
}
// let smallImgSrc = document.getElementsByClassName("oldImg");
// for (let i = 0; i < smallImgSrc.length; i++) {
//   smallImgSrc[i].src = "spiderman_img.png"; // changing the all src of images to one image
//   console.log(`value of image number ${i} is changed`);
// }

// quartSelector
console.log("QuarySelector started");
console.dir(document.querySelector('p'));
console.dir(document.querySelector('h1'));
console.dir(document.querySelector('#description'));
console.dir(document.querySelector('.oldImg'));

console.dir(document.querySelector("div a"));

//querySelectorAll
console.dir(document.querySelectorAll("div a"));
console.dir(document.querySelectorAll('p'));


// obj.style

let div = document.querySelector('div');
console.dir(div);

div.style.backgroundColor = "gray";

let heading = document.querySelector('h1');
// heading.style.color = 'yellow';
// heading.style.backgroundColor = 'grey';
// heading.style.fontFamily = 'cursive';
// heading.style.textDecoration = 'underline wavy blue';

// querySelectorAll
let link = document.querySelectorAll('.box a');
console.dir(link);
// for querySelectorAll use loops
for(links of link){
  links.style.color = 'white'; // inline style
}

//Manipulating style
/*
1. classList.add()  ->for add a new class
1. classList.remove() -> for delete a class
1. classList.contains() -> check  class exist or not
1. classList.toggle() -> it refers like switch on/off system
*/

let img = document.querySelector('img');
console.log("Before adding class check the value in paranthesis");
console.dir(img.classList);
console.log("After adding class check the value in paranthesis");
img.classList.add("one");
img.classList.add("two");
img.classList.add("three");
console.dir(img.classList);

// setAttribute
img.setAttribute('class','new');
img.classList;

//contains
let h1 = document.querySelector('h1');
console.dir(h1.classList.contains("new"));

console.dir(img.classList.contains("new"));

// toggle (if class exits remove it, and if class is not exist in this case add that class). practice done on console window

/*
  Navigation
  parentElement
  children
  previousElementSibling/nextElementSibling
*/

let h4 = document.querySelector('h4');
console.dir(h4);
console.dir(h4.parentElement);
console.log("we can also apply styling on javascriptNavigation");

// Adding elements
/*
  1.appendChild(element) 
  2.append(element)
  3.prepend(element)
  4.insertAdjacent(where,element)
*/
let box = document.querySelector(".box")
let btn = document.createElement('button');
btn.innerText = "I am a button";
box.appendChild(btn);
let btn2 = document.createElement('button');
btn2.innerText = "I am a button number 2";
box.prepend(btn2);
let body = document.querySelector('body')
let p = document.createElement('p');
p.innerHTML = "I am a paragraph </br>";
body.appendChild(p);

console.log(btn);
console.log(p);
p.insertAdjacentElement('beforeend',btn);
btn2.remove();
