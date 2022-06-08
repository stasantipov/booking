import { onResetButtonClick } from './form.js';

const ERROR_SHOW_TIME = 5000;
const DATABASE_URL = 'https://25.javascript.pages.academy/keksobooking';
const DATABSE_OFFERS_URL = `${DATABASE_URL}/data`;

const showError = (error) => {
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('error-container');
  errorContainer.textContent = error;

  document.body.append(errorContainer);

  setTimeout(() => {
    errorContainer.remove();
  }, ERROR_SHOW_TIME);
};

const getData = (onSuccess, onFail) => {
  fetch(DATABSE_OFFERS_URL )
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    })
    .catch(onFail);
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    DATABASE_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        onResetButtonClick();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export { getData, sendData, showError };
