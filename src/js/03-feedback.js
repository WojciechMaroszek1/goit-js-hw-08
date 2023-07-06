import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const { email, message } = form.elements;

form.addEventListener('input', throttle(getInputData, 500));
form.addEventListener('submit', getEmailData);

function getInputData(event) {
  const inputData = { email: email.value, message: message.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputData));
}

function getEmailData(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem(email);
  localStorage.removeItem(message);
}