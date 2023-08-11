const formEl = document.querySelector('.feedback-form');
const inpEml = document.querySelector('input');
const inpTxt = document.querySelector('textarea');
const KEY_FEEDBACK = 'feedback-form-state';
const getData = localStorage.getItem(KEY_FEEDBACK);
const dog = JSON.parse(getData);
const mainData = {};
upDate();
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, message },
  } = evt.currentTarget;
  mainData.email = email.value;
  mainData.message = message.value;

  console.log(mainData);
  const local = localStorage.setItem(KEY_FEEDBACK, JSON.stringify(mainData));
  evt.currentTarget.reset();
  //   localStorage.removeItem(KEY_FEEDBACK);
}

function upDate() {
  if (dog) {
    // console.log('in foo', dog);
    inpTxt.value = dog.message;
    inpEml.value = dog.email;
  }
}
// const refs = {
//   formEl: document.querySelector('.feedback-form'),
//   inputEl: document.querySelector('input'),
//   textEl: document.querySelector('textarea'),
// };
// refs.formEl.addEventListener('submit', onFormSubmit);
// refs.inputEl.addEventListener('input', onEmailInput);
// refs.textEl.addEventListener('input', onTextareaInput);
// const inputData = {};
// function onFormSubmit(evt) {
//   evt.preventDefault();
//   console.log(evt.currentTarget);
// }

// let emailInput;

// function onEmailInput(evt) {
//   //   console.log(evt.currentTarget.value);
//   inputData.email = evt.target.value;
//   localStorage.setItem('input-email', JSON.stringify(inputData));

//   //
// }
// console.log(inputData);

// function onTextareaInput(evt) {
//   console.log(evt.target.value);
//   const textAreaInput = evt.currentTarget.value;
//   inputData.message = textAreaInput;
// }
