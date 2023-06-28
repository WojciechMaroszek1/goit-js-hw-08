import throttle from 'lodash.throttle';

const feedback = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

feedback.addEventListener('input', throttle(getInputData, 500));
feedback.addEventListener('submit', getEmailData);

function getInputData(event) {
  const inputData = { email: email.value, message: message.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputData));
}

function getEmailData(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });
  feedback.reset();
  localStorage.clear();
}