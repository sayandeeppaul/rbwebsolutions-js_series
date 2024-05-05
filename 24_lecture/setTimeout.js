// console.log("Start")

// setTimeout(() => {
//     console.log("Inside setTimeout")
// }, 5000);

// console.log("End")

// let startDate = new Date().getTime()

// let endDate = startDate

// // s-> 1714925748011 + 10000 =>1214925758011
// // e- > s -> 1714925748011

// while(endDate < startDate + 10000){
//     endDate = new Date().getTime()
// }

// console.log("Outside while loop")

console.log("Start");

 
setTimeout(function footer(){
    console.log("Search in footer")
}, 0);
console.log("End");

footer()

/*

priority code

header()
DBcall()
security()

*/