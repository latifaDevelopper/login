const form = document.getElementById("loginForm");
const alertBox = document.getElementById("customAlert");
const closeAlert = document.getElementById("closeAlert");

form.addEventListener("submit", e => {
  e.preventDefault();
  let isValid = true;

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  if(email.value.trim() === ""){
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else if(!/\S+@\S+\.\S+/.test(email.value)){
    document.getElementById("emailError").textContent = "Email is invalid";
    isValid = false;
  }

  if(password.value.trim() === ""){
    document.getElementById("passwordError").textContent = "Password is required";
    isValid = false;
  }

  if(isValid){
    alertBox.style.display = "flex";
    form.reset();
  }
});

closeAlert.addEventListener("click", () => {
  alertBox.style.display = "none";
});
