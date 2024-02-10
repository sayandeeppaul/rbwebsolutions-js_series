let count = Number(document.querySelector(".changingVariable").innerText);

console.log(typeof count);
console.log(count);

document.querySelector(".increase").onclick = function () {
  count = count + 1;
  console.log(count);
  document.querySelector(".changingVariable").innerText = count;
};

document.querySelector(".decrease").onclick = function () {
  count = count - 1;
  console.log(count);
  document.querySelector(".changingVariable").innerText = count;
};
