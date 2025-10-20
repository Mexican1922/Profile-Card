const form = document.getElementById("contactForm");
const successMsg = document.querySelector(
  '[data-testid="test-contact-success"]'
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  const name = form.name;
  const email = form.email;
  const subject = form.subject;
  const message = form.message;

  // Helper function to set error
  function setError(input, msg) {
    const errorEl = document.getElementById(`error-${input.id}`);
    errorEl.textContent = msg;
    isValid = false;
  }

  // Reset errors
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  successMsg.hidden = true;

  // Validate name
  if (!name.value.trim()) setError(name, "Full name is required");

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) setError(email, "Email is required");
  else if (!emailRegex.test(email.value))
    setError(email, "Invalid email format");

  // Validate subject
  if (!subject.value.trim()) setError(subject, "Subject is required");

  // Validate message
  if (!message.value.trim()) setError(message, "Message is required");
  else if (message.value.trim().length < 10)
    setError(message, "Message must be at least 10 characters");

  // If valid
  if (isValid) {
    successMsg.hidden = false;
    form.reset();
  }
});
