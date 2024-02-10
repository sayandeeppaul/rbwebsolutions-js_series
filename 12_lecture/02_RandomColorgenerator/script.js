document.querySelector(".btn").onclick = function () {
  let randomNumber = Math.round(Math.random() * 1000000).toString();
  console.log(typeof randomNumber);
  let randomColor = "#" + randomNumber;
  document.querySelector(".color-code").innerText = randomColor;
  document.querySelector("body").style.backgroundColor = randomColor;
};
