let frm = document.querySelector("form");
let password = document.querySelector("#password");
let email = document.querySelector("#email");

frm.addEventListener("submit", function(e) {
  e.preventDefault();

  // Regex patterns
  const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  // Clear previous messages
  document.querySelector("#emailError").textContent = "";
  document.querySelector("#passwordError").textContent = "";
  document.querySelector("#resultMessage").textContent = "";

  let isValid = true;

  // Email validation
  if (!emailRegex.test(email.value)) {
    document.querySelector("#emailError").textContent = "Invalid email format";
    isValid = false;
  }

  // Password validation
  if (!passwordRegex.test(password.value)) {
    document.querySelector("#passwordError").textContent = "Password must be at least 8 chars, include uppercase, lowercase, and number";
    isValid = false;
  }

  // Success message
  if (isValid) {
    document.querySelector("#resultMessage").textContent = "Everything is correct";
  }
})