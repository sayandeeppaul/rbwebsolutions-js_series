document.querySelector(".btn").onclick = function () {
  //   let randomNumber = Math.round(Math.random() * 1000000).toString();
  //   console.log(typeof randomNumber);
  //   let randomColor = "#" + randomNumber;
  const min = 100000;
  const max = 999999;
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  randomNumber = randomNumber.toString();
  console.log(typeof randomNumber);
  let randomColor = "#" + randomNumber;
  document.querySelector(".color-code").innerText = randomColor;
  document.querySelector("body").style.backgroundColor = randomColor;
};
