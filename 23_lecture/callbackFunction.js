// what is callback function
setTimeout(() => {
    console.log("This is inside Set Timeout")
}, 1);

function fun1(param) {
    console.log("This is Function 1")
    // console.log(param)
    param()
}

fun1(function fun2() {
    console.log("This is Function 2")
})

// function attachEvent() {
//   let count = 0;
//   document.querySelector("#btn").addEventListener("click", function abc() {
//     console.log("Clicked ", ++count);
//   });
// }

// attachEvent();

// garbage collection , remove listener
