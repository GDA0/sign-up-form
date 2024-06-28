// Form validation
const form = document.querySelector(".needs-validation");

form.addEventListener(
  "submit",
  (event) => {
    const passwordInput = form.querySelector("#password");
    const confirmPasswordInput = form.querySelector("#confirm-password");
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Reset custom validation messages and feedback display
    confirmPasswordInput.setCustomValidity("");
    const invalidFeedbacks =
      confirmPasswordInput.parentNode.querySelectorAll(".invalid-feedback");
    invalidFeedbacks.forEach((feedback) => (feedback.style.display = "none"));

    // Check if confirm password is empty
    if (!confirmPassword) {
      confirmPasswordInput.setCustomValidity("Please confirm your password.");
      confirmPasswordInput.parentNode.querySelector(
        ".invalid-feedback"
      ).style.display = "block";
    }
    // Check if passwords match
    else if (password !== confirmPassword) {
      confirmPasswordInput.setCustomValidity("Passwords do not match.");
      confirmPasswordInput.parentNode.querySelector(
        ".invalid-feedback.mismatch"
      ).style.display = "block";
    }

    // If form is invalid, prevent submission
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add("was-validated");
  },
  false
);
