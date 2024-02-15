const student = {
  // key : value
  name: "Shanker",
  age: 20,
  marks: 95,
  city: "haridwar",
};
console.log(student);

const delhi = {
  latitude: "32.6649 N",
  longitude: "43.749 E",
};

const item = {
  price: 560,
  discount: 50,
  colors: ["blue", "black"],
};

// Task Question

const twitter = {
  username: "sjcoder743",
  content: "kuch bhi likh skte hai",
  likes: 10000,
  reposts: 13,
  tags: ["html", "css", "js", "mongodb", "nextjs"],
};
console.log(twitter.username);
console.log(twitter.content);
console.log(twitter.likes);
console.log(twitter.tags);

// Add/ update value of objects
student.name = "Shanker";
console.log("Here are the details of student", student);

// Question for practice

const student2 = {
  name: "Ekta",
  age: 20,
  marks: 92.4,
  city: "Uttarakhand",
};

console.log("Details of Ekta", student2);
// now adding and updating the objects
student2.city = "Mumbai";
student2.gender = "female";
student2.marks = "A+";
console.log("Updated details of student", student2);

// delete details from objects
delete student2.city;

// objects of objects(Nesting)
const classInfo = {
  aman: {
    age: 32,
    marks: 56,
    grade: "A",
    gender: "male",
    city: "mumbai",
  },

  shanker: {
    age: 19,
    marks: 98,
    grade: "A+",
    gender: "Male",
    city: "Haridwar",
  },

  ekta: {
    age: 19,
    marks: 89,
    grade: "A",
    gender: "female",
    city: "Haridwar",
  },

  radha: {
    age: 17,
    marks: "99",
    grade: "O",
    gender: "female",
    city: "Haridwar",
  },
};

console.log("Record of class", classInfo);

// Array of objects

const studentInfo = [
  {
    name: "aman",
    age: 32,
    marks: 56,
    grade: "A",
    gender: "male",
    city: "mumbai",
  },

  {
    name: "Shanker",
    age: 19,
    marks: 98,
    grade: "A+",
    gender: "Male",
    city: "Haridwar",
  },

  {
    name: "Ekta",
    age: 19,
    marks: 89,
    grade: "A",
    gender: "female",
    city: "Haridwar",
  },

  {
    name: "Radha",
    age: 17,
    marks: "99",
    grade: "O",
    gender: "female",
    city: "Haridwar",
  },
];
console.log("Details of studentInfo", studentInfo);

// Math object
console.log("Value of PI", Math.PI);
console.log("Value of E", Math.E);

// methods of math objects
let num = Math.abs(5);
console.log(num);

let power = Math.pow(2, 4);
console.log("The value of power is :", power);

// floor, ceil, random (alredy try in console)

// Practice Question
console.log("Generate a random number between 1 to 100");
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random generated number is :", randomNum);

// next Question
console.log("Generate a random number between 1 to 5");
let randomNum2 = Math.floor(Math.random() * 5) + 1;
console.log("Random generated number is :", randomNum2);

// Lets play a game.

// const max = prompt("Enter the maxium number");
// randomNum =  Math.floor(Math.random()*max)+1;

// let guess = prompt("Enter a random number: ");
// while(true){
//   if(guess=="quit"){
//     console.log("Quit the game");
//     break;
//   }

//   if(guess == randomNum){
//     console.log("Congratulation! You entered correct number,the number is",guess);
//     break;
//   }

//   else if(guess>randomNum){
//     guess = prompt("You entered greater number,please enter small number");
//   }

//   else if(guess<randomNum){
//     guess = prompt("You entered smallest number,please enter large number");
//   }
//   else{
//     guess = prompt("You entered incorrect number,please try again");
//   }
// }