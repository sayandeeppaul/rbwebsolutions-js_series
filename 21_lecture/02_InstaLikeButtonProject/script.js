let container = document.querySelector("#container");
let icon = document.querySelector(".icon");

container.addEventListener("dblclick", function () {
  icon.style.transform = "translate(-50%,-50%) scale(1)";
  icon.style.color = "red";
  setTimeout(() => {
    icon.style.transform = "translate(-50%,-50%) scale(0)";
    icon.style.color = "white";
  }, 1000);
});

// console.log("1")
// console.log("2")
// console.log("3")

// setTimeout(() => {
//     console.log("1")
// }, 5000);

// setTimeout(() => {
//     console.log("2")
// }, 10000);

// setTimeout(() => {
//     console.log("3")
// }, 15000);
