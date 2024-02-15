//1
let num = 40;
if (num % 10 == 0) {
    console.log("Good");
}
else {
    console.log("Bad");
}

//2
// let nama = prompt("Enter your name:");
// let newNum = prompt("Enter your age:");

// alert(`${nama}is ${newNum} year old`);

//3
month = "Quater3";
switch(month){
    case "Quater1":
        console.log("January,February,March");
        break;
    case "Quater2":
        console.log("April,May,June");
        break;
    case "Quater3":
        console.log("July,August,September");
        break;
    case "Quater4":
        console.log("October,November,December");
        break;
}
//4 A string is a goldenstring if it starts with the character ‘A’ or‘a’ and has a total length greater than 5

str = 'akshara';
len = console.log(str.length);
if((str[0]==='a' || str[0]==='A') &&  str.length>=5){
    console.log("Golden String");
}
else{
    console.log("Not a Golden string");
}

//5 greater among three number.
let a1 = 34;
let b1 = 110;
let c1 = 30;

if((a1>b1)&& (a1>c1)){
    console.log("a1 is greater");
}
else if((b1>a1)&&(b1>c1)){
    console.log("b1 is greater");
}
else{
    console.log("c1 is greater");
}

// 66 Bonus
let num1 = "32";
let num2 = "47352";

let len1 = num1[num1.length-1];
let len2 = num2[num2.length-1];
console.log(len1);
console.log(len2);

if(len1===len2){
    console.log("Yes,Both numbers have same last digit.");
}
else{
    console.log("No,Both numbers haven't same last digit.");
}