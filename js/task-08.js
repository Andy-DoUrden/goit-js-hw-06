const form = document.querySelector(".login-form");

// const emailInput = form.querySelector("input[name='email']");

// const passwordInput = form.querySelector("input[name='password']");

// const submitButton = form.querySelector("button[type='submit']");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Будь ласка заповніть всі поля.");
  }

  const formData = { email: email.value, password: password.value };
  console.log(formData);

  event.currentTarget.reset();
});
