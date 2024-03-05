// IIFE - > Immediately  invoked function expression

// function fullName() {
//   console.log("Sayandeep")
// }

// fullName()

// (function configDB() {
//     console.log("DB connected successfully")
// })()

// (function)(exec)

// (
//     wrap up the function
// )(
//     call
// )

// ()();
//     ()();

(function configDB() {
  console.log("DB connected successfully");
})()

(function configCloud() {
  console.log("Cloud connected successfully");
})();

// configDB()
