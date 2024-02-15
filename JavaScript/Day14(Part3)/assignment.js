// pq1
arr = [7, 9, 0, -2];
let n = 3;
let ans = arr.slice(0, 3);
console.log(ans);

// pq2
ans = arr.slice(-3);
console.log(ans);

// pq3
str = "shanker";
// if(str==null){
//     console.log("string is blank");
// }
// else{
//     console.log("string is not blank");
// }

if (str.length == 0) {
  console.log("String is blank");
} else {
  console.log("string is not blank");
}


// pq4
str = "ShankerJoshi";
let index = 3;

if(str[index] == str[index].toLowerCase()){
    console.log("Character is in lowercase");
}
else{
    console.log("Character is not in lowercase");
}


// pq5
// str = prompt("Enter a string here: ");
console.log(`orignal string is ${str}`);
console.log(`string without space is ${str.trim()}`);


// pq6
arr = [12,3,43,9,6];
index = 4;

if(arr[index] === 54){
    console.log("Element is present in array");
}
else{
    console.log("Element is not present in array");
}