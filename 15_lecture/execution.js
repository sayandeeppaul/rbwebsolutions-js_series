// let num1 = 100
// let num2 = 200

// function addTwo(num1,num2) {
//     let total = num1+num2
//     return total
// }

// let result1 = addTwo(num1,num2)
// let result2 = addTwo(50,500)

function one() {
    console.log("one");
    two();
  }
  
  function two() {
    console.log("two");
    three();
  }

  function three() {
    console.log("three");
  }
  
  one();
  two();
  three();
