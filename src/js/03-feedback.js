import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inpEml = document.querySelector('input');
const inpTxt = document.querySelector('textarea');

const KEY_FEEDBACK = 'feedback-form-state';

const getData = localStorage.getItem(KEY_FEEDBACK);

const getDataParse = JSON.parse(getData);

document.addEventListener('DOMContentLoaded', () => {
  if (getDataParse) {
    inpTxt.value = getDataParse.message;
    inpEml.value = getDataParse.email;
  }
});

const mainData = {}; //об`єкт даних для запису сховище

formEl.addEventListener('submit', throttle(onFormSubmit, 500));
formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
  evt.preventDefault();
  mainData.email = formEl.email.value;
  mainData.message = formEl.message.value;
  const local = localStorage.setItem(KEY_FEEDBACK, JSON.stringify(mainData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(KEY_FEEDBACK);
  console.log(mainData);
}
