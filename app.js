let form = document.getElementById('form');
let email = document.getElementById("email");
let password = document.getElementById('pwd');
let text1 = document.getElementById('text');
let text2 = document.getElementById('text2');
let button = document.querySelector(".btn");
let userName = document.getElementById('username');
let userNameText = document.querySelector('#userNameText');
let phoneNumber = document.getElementById('phoneNumber');
let phoneNumberText = document.getElementById('number');
let confirmPassword = document.querySelector("#cfm-pwd");
let confirmText = document.querySelector("ConfirmText");
const togglePassword = document.querySelector('#togglePassword');


const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const passwordPattern = /^[a-z0-9]{8,10}$/;

function usernameValidation(){
  if (userName.value.length > 12){
    form.classList.add('invalid');
    userNameText.innerHTML = "Username must not exceed 13 characters";
    userNameText.style.color = "red";
  } else {
    userNameText.innerHTML = "";
  }
};

function phoneNumberValidation(){
  if (phoneNumber.value.length > 10){
    form.classList.add('invalid');
    phoneNumberText.innerHTML = "Phone Number should not exceed 11 digits"
    phoneNumberText.style.color = "red";
  } else {
    phoneNumberText.innerHTML ="";
  }

  // if (phoneNumber.value !== 0-9){
  //   form.classList.add('invalid');
  //   phoneNumberText.innerHTML = "Invalid input";
  //   phoneNumberText.style.color = "red";
  // } else {
  //   phoneNumberText.innerHTML = "";
  // }
};


function emailValidation(){
  if (email.value.match(emailPattern)){
    form.classList.add("valid");
    form.classList.remove("invalid");
    text1.innerHTML = "";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text1.innerHTML = "Enter Valid Email";
    text1.style.color = "#ff0000";
  }

  if (email.value === ""){
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text1.innerHTML = "";
  }
};

function passwordValidation(){
  if (password.value.match(passwordPattern)){
    form.classList.add("validPwd");
    form.classList.remove("invalidPwd");
    text2.innerHTML = "";
    text2.style.color = "green";
  } else if (password.value.length < 9){
    form.classList.remove("validPwd");
    form.classList.add("invalidPwd");
    text2.innerHTML = "Password must be atleast 9 characters";
    text2.style.color = "#ff0000";
  } else if (password.value.length > 11) {
    form.classList.remove("validPwd");
    form.classList.add("invalidPwd");
    text2.innerHTML = "Password must be atmost 12 characters";
    text2.style.color ="#ff0000";
  } else {
    text2.innerHTML = "Password must not include uppercase or special characters";
    text2.style.color = "#ff0000"
    form.classList.remove("validPwd");
    form.classList.add("invalidPwd");
  }
};

function confirmPasswordValidation(){
  if (confirmPassword.value !== password.value){
    form.classList.add("invalid");
    confirmText.innerHTML = "Password do not match";
    confirmText.style.color = "red";
  } else {
    confirmText.innerHTML = "";
  }
};


togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});


function openCongrat(){
  let formPage = document.querySelector(".formDiv");
  formPage = "congrat.html";
}

button.addEventListener("submit", (e) => {
  e.target.preventdefault();

  if (email.value.match(emailPattern) && (password.value.match(passwordPattern))){
    alert("You have successfully Resgistered");
  } else {
    alert("Your inputs are not valid");
  }
});
