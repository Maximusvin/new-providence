const callbackForm = document.querySelector('.callback-form__container');
const requestReceivedModal = document.querySelector('#request-received');

const userEmail = document.querySelector('#callback-form-input-email');

callbackForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let hasError = false;

  if (!userEmail.value.trim() || !isEmailValid(userEmail.value)) {
    callbackForm.classList.add('callback-form-input-error');
    userEmail.classList.add('callback-form-input-error');
    hasError = true;
  } else {
    callbackForm.classList.remove('callback-form-input-error');
    userEmail.classList.remove('callback-form-input-error');
  }

  if (hasError) {
    return;
  }

  userEmail.value = '';

  requestReceivedModal.classList.add('modal-active');

  setTimeout(function () {
    requestReceivedModal.classList.remove('modal-active');
  }, 2000);
});

function isEmailValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}
