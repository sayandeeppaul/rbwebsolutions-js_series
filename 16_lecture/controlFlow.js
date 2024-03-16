// conditional statements

// if

// if(false){
//     console.log("executed")
// }

// < > <= >= == != === !==

// normal checking -> number 2 == string 2 (value comapre)
// if(2=="2"){
//     console.log("printed")
// }

// strict checking -> number 2 == string 2 (datatype comapre)
// if(2==="2"){
//     console.log("printed")
// }

// if(2!=3){
//     console.log("printed")
// }

// let name = " "
// if(name){
//     console.log("name printed")
// }

// let num = 100

// if(num > 50){
//     var newNum = 150
//     console.log("printed",newNum)
// }
// else{
//     console.log('not printed')
// }

// console.log(newNum)

// const balance =  50000

// if(balance>100000){
//     console.log("rich")
// }
// else if(balance>=50000 && balance<=100000){
//     console.log("Middle")
// }
// else{
//     console.log("poor")
// }

// const inputtedEmail = "sayandeep775@gmail.com";
// const password = "sayandeep123";

// const dbEmail = [
//   {
//     email: "nabab775@gmail.com",
//     password: "nabab123",
//   },
//   {
//     email: "sayandeep775@gmail.com",
//     password: "sayandeep1",
//   },
//   {
//     email: "tirtha775@gmail.com",
//     password: "tirtha123",
//   },
// ];

// for (let index = 0; index < dbEmail.length; index++) {
//     console.log(dbEmail[index])
//   if (dbEmail[index].email === inputtedEmail) {
//     console.log("email exist in db");
//     if (dbEmail[index].password === password) {
//       console.log("You are logged in succesfully");
//     } else {
//       console.log("incorrect password");
//     }
//   } else {
//     console.log("please do signup");
//   }
// }

// let x = 10;
// let result = (x > 0) ? "positive" : "non-positive";
// console.log("x is " + result);

// const temp = 0
// console.log((temp==0)?"Temp is unavailable":"temp is avaialble")

let student=null;
console.log(
  !student
    ? `deparment is ${student}`
    : "department not been allocated"
);

