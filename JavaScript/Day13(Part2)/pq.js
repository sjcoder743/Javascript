// PracticeQuestion.
console.log("Practice Question Js file.");
let light = "red";
switch(light){
    case "red":
        console.log("Stop! here.");
        break;
    case "yellow":
        console.log("Get ready.");
        break;
    case "green":
        console.log("Let's get go.");
        break;
}

// 2.
let size = "L";
if(size=="XL"){
    console.log("Price is Rs.250");
}
else if(size=="L"){
    console.log("Price is Rs.200");
}
else if(size=="M"){
    console.log("Price is Rs.100");
}
else{
    console.log("Price is Rs.50");
}

//3.
str = "army";
let len = str.length;
// console.log(len);
if(len>3 && str[0]=="a"){
    console.log("This is good string");
}
else{
    console.log("This is not good string");
}

//4
num = 12;
if((num%3===0)&&((num+1==15) || (num-1==11))){
    console.log("safe");
}
else{
    console.log("Unsafe");
}