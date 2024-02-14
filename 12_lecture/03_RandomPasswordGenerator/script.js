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

// eyeIcon.onclick = function(){
//   if(password.type=='password'){
//     password.type='text'
//     eyeIcon.innerText = 'visibility'
//   }
//   else{
//     password.type='password'
//     eyeIcon.innerText='visibility_off'
//   }
// }

eyeIcon.addEventListener("click", function () {
  if (password.type == "password") {
    password.type = "text";
    eyeIcon.innerText = "visibility";
  } else {
    password.type = "password";
    eyeIcon.innerText = "visibility_off";
  }
});

password.addEventListener("input", function () {
  // we are deciding when we actually  want to show the strength
  if (password.value.length > 0) {
    strength.style.display = "inline";
  } else {
    strength.style.display = "none";
  }

  if (password.value.length < 4) {
    strength.innerText = "weak";
    strength.style.color = "red";
    password.style.border = "2px solid red";
  } else if (password.value.length >= 4 && password.value.length < 8) {
    strength.innerText = "medium";
    strength.style.color = "orange";
    password.style.border = "2px solid orange";
  } else {
    strength.innerText = "strong";
    strength.style.color = "green";
    password.style.border = "2px solid green";
  }
});
