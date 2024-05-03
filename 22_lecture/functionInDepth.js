// name1()
// name2()

// Function Statement
function name1() {
    console.log("Imon")
}

// Function Expression
var name2 = function name() {
    console.log("Saurav")
}

// Anonymous Function

var name3 = function() {
    console.log("Tirtha")
}

// Function statements require a function name
// function (){
    
// }


// Named Function Expression
// let count = function name() {
//     console.log(name)
// }

// count()

// Arguement & Parameter

// Parameter ---> recieve
function name(n1,n2) {
    console.log(n1," ",n2)
}

// value pass ---> Arguement
// name("Bikash","Sanchari")


// First class Function 
// ability to used like values
// function one(f1){
//     console.log("One")
//     console.log(f1)
// }

// function two() {
//     console.log("Two")
// }

// one(two)

function three() {
    console.log("Three")
}

let four = (param)=>{
    console.log(param)
    param()
    return function five() {
        
    }
}
// four(three)

console.log(four(three))