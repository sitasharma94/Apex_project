const signUpBtn = document.querySelector('.sign-up button[type="submit"]');
const inputs = document.querySelectorAll(".sign-up input");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  const password = inputs[2].value.trim();
  const confirm = inputs[3].value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.length < 6) {
    alert("Password should be at least 6 characters long.");
    return;
  }

  if (!name || !email || !password || !confirm) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match.");
    return;
  }
  alert(`Sign up successful! Welcome, ${name}!`);
  window.location.href = "sign.html";
});
document.querySelector('.sign-in-btn').addEventListener('click', function () {
    window.location.href = "sign.html";
  });