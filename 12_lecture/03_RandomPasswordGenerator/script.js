let password = document.querySelector("#password");
let eyeIcon = document.querySelector(".eye-icon");
let strength = document.querySelector(".strength");
let generateBtn = document.querySelector(".generate-btn");
let copyBtn = document.querySelector(".copy-btn");

let passwordLength = 12;

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbols = "!@#$%^&*()_<>/?{}[]|";

const allChars = uppercase + lowercase + number + symbols;

function generatePassword() {
  let randomPassword = "";
  randomPassword += uppercase[Math.floor(Math.random() * uppercase.length)];
  randomPassword += lowercase[Math.floor(Math.random() * lowercase.length)];
  randomPassword += number[Math.floor(Math.random() * number.length)];
  randomPassword += symbols[Math.floor(Math.random() * symbols.length)];

  while (randomPassword.length < passwordLength) {
    randomPassword += allChars[Math.floor(Math.random() * allChars.length)];
  }
  password.value = randomPassword;
}

function copyPassword() {
  password.select();
  document.execCommand("copy");
}