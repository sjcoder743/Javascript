// Method started --> object main function pass krna

// const calculator = {
//     add : function(a,b){
//       return a + b;
//     },
//     sub : function(a,b){
//       return a - b;
//     },
//     mul : function(a,b){
//       return a * b;
//     },
//     dev : function(a,b){
//       return a / b;
//     }
//   };

// method shortHand
const calculator = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
  dev(a, b) {
    return a / b;
  },
};

// this keyword
const student = {
    name : "shanker",
    age:19,
    eng:88,
    math:98,
    computerScience:97,
    getAvg() {
        console.log(this);
        let avg = (this.eng+this.math+this.computerScience)/3;
        console.log(`${this.name} got avg marks = ${avg}`);    
    }
}

function getAvg(){
    console.log(this);
}