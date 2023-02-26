const form = document.querySelector(".login-form");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
    console.log(formData);
  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert(`Please fill in all the fields!`);
  };

  formData.forEach((value, name) => {
    console.log(`${name}: ${value}`);
  });
  
  event.currentTarget.reset();
  
};
