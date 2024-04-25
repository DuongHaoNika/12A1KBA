const showPassword = document.querySelector(".show-password");
const hidePassword = document.querySelector(".hide-password");
const inputPassword = document.querySelector('input[name="password"]');

showPassword.onclick = function () {
  showPassword.style.display = "none";
  hidePassword.style.display = "block";
  inputPassword.type = "text";
};

hidePassword.onclick = function () {
  showPassword.style.display = "block";
  hidePassword.style.display = "none";
  inputPassword.type = "password";
};

inputPassword.oninput = function () {
  if (inputPassword.value === "") {
    showPassword.style.display = "none";
  } else {
    showPassword.style.display = "block";
  }
};
