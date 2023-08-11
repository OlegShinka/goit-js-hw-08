const refs = {
  formEl: document.querySelector('.feedback-form'),
  inputEl: document.querySelector('input'),
  textEl: document.querySelector('textarea'),
};
refs.formEl.addEventListener('submit', onFormSubmit);
refs.inputEl.addEventListener('input', onEmailInput);
refs.textEl.addEventListener('input', onTextareaInput);

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(evt.currentTarget);
}
const inputData = {};

let emailInput;

function onEmailInput(evt) {
  //   console.log(evt.currentTarget.value);
  inputData.email = evt.target.value;
  localStorage.setItem('input-email', JSON.stringify(inputData));

  //
}
console.log(inputData);

function onTextareaInput(evt) {
  console.log(evt.target.value);
  const textAreaInput = evt.currentTarget.value;
  inputData.message = textAreaInput;
}
