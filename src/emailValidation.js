const invalidEmail = document.getElementById("invalidEmail");

const inputValidation = e => {
  const input = e.target.value;

  if (input == "") {
    invalidEmail.setAttribute("class", "invalidNone");
    return;
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
    console.log("yay email");
    invalidEmail.setAttribute("class", "invalidNone");
  } else {
    invalidEmail.setAttribute("class", "invalid");
    console.log("Not an email");
  }
};

const emailInputForm = document.getElementById("email");
emailInputForm.addEventListener("blur", inputValidation);

console.log("from Emailvalidation JS");
