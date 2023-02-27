const form = document.querySelector(".login-form");

form.addEventListener("submit", handleFormSubmition);

// function handleFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);
//     // console.log(formData);
//   if (
//     event.currentTarget.elements.email.value === "" ||
//     event.currentTarget.elements.password.value === ""
//   ) {
//     alert(`Please fill in all the fields!`);
//   } else {
//   formData.forEach((value, name) => {
//     console.log(`${name}: ${value}`);
//   })
//   };

//   console.log(formData);
  
//   event.currentTarget.reset();
// };

function handleFormSubmition(event) {
  event.preventDefault();

  const {
    elements: {email, password}
  } = event.currentTarget;
    if (email.value === "" || password.value === "") {
      return alert(`Please fill in all the fields!`);
    }

    const data = {
      [ email.name ]: email.value,
      [ password.name]: password.value 
    };

    console.log(data);

    event.currentTarget.reset();
}
