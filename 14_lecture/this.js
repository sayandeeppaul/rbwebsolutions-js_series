console.log(this);

// context -> global
// let balance = 1000

// const userObject = {
//     name:"Saurav",
//     isLoggedIn:true,
//     // context -> local
//     balance:10000,
//     // update balance -> 20000
//     myCurrBalance:function(){
//         console.log(this.balance)
//     }
// }

// console.log(balance)

// userObject.myCurrBalance()
// userObject.balance = 20000
// userObject.myCurrBalance()

// let balance =1000000
// const userDetails = {
//     name : "Nabab",
//     balance:100000,
//     loan:{
//         loanID:"1234aec",
//         loanAmmount :{
//             balance:10000,
//             currency:"INR",
//             showLoanBalance:function(){
//                 console.log(this.balance)
//             }
//         }
//     },
//     showBalance : function(){
//         console.log(this.balance)
//     }
// }
// userDetails.loan.loanAmmount.showLoanBalance()
// console.log(balance)
// userDetails.showBalance()
// userDetails.loan.loanAmmount.showLoanBalance()

// function name() {
//     let fullName = "Saurav Jana"
//     console.log(this.fullName)
// }
// name()

// old school function definition
// function name(params) {

// }

// ES6 --------->

// arrow function

// const name = ()=>{

// }

const addTwo = (num1, num2) => {
  //   if (num1 > num2) {
  //     console.log(num1);
  //   }
  //   return 10;
  return 20;
};

// console.log(addTwo(2, 3));

// const name = ()=>(200)

// console.log(name())
// const userDetails = () => (
//     {username:"saurav"}
//     )

// console.log(userDetails())
// console.log(addTwo(1, 2));
