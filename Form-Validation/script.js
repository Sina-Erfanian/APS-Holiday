let $ = document;
const nameError = $.querySelector("#name-error");
const phoneError = $.querySelector("#phone-error");
const emailError = $.querySelector("#email-error");
const messageError = $.querySelector("#message-error");
const submitError = $.querySelector("#submit-error");
const inputName = $.querySelector("#contact-name");
const inputPhone = $.querySelector("#contact-phone");
const inputEmail = $.querySelector("#contact-email");
const messageTextarea = $.querySelector("#contact-mess");
const btn = $.querySelector("#btn");
const form = $.querySelector("form");

function nameValidate(e) {
  let value = inputName.value;
  if (value.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write Full Name";
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function phoneValidate(e) {
  let value = inputPhone.value;

  if (value.length == 0) {
    phoneError.innerHTML = "Phone is required";
    return false;
  }

  if (value.length !== 10) {
    phoneError.innerHTML = "Phone should be 10 digit";
    return false;
  }

  if (!value.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only Digits";
    return false;
  }
  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function emailValidate(e) {
  let value = inputEmail.value;

  if (value.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (
    !value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    emailError.innerHTML = "Invalid Email";
    return false;
  }
  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function messValidate(e) {
  let value = messageTextarea.value;
  const maxLength = 30;
  let left = maxLength - value.length;
  if (left > 0) {
    messageError.innerHTML = `${left} More characters required`;
    return false;
  }
  messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
inputName.addEventListener("keyup", nameValidate);
inputPhone.addEventListener("keyup", phoneValidate);
inputEmail.addEventListener("keyup", emailValidate);
messageTextarea.addEventListener("keyup", messValidate);

function validateForm() {
  if (
    !nameValidate() ||
    !phoneValidate() ||
    !emailValidate() ||
    !messValidate()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "please fix error";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
