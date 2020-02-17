const form = document.querySelector('#form'),
      sendButton = form.querySelector('.button'),
      formFields = Array.from(form.querySelectorAll('.feedback__field'));

sendButton.addEventListener('click', e => {
  e.preventDefault();
  validateForm(form);
  let data = {};
  for (let field of formFields) {
    data[field.name] = field.value;
  }

  if (validateForm(form)) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST','https://webdev-api.loftschool.com/sendmail/fail');
    console.log('data was sent');
    xhr.send(JSON.stringify(data));
  }
})

function validateForm(form) {
  let valid = true;
  for (let field of formFields) {
    checkField(field);
    if (!checkField(field)) valid = false;
  }
  return valid;
}

function checkField(field) {
  if (field.checkValidity()) {
    (field.nextElementSibling)?field.parentNode.removeChild(field.nextElementSibling):'';
    return true;
  }
  else {
    (!field.nextElementSibling)?createError(field):'';
    field.nextElementSibling.textContent = field.validationMessage;
    return false;
  }
}

function createError(field) {
  const error = document.createElement('div');
  field.parentNode.appendChild(error);
  error.classList.add('error');
}