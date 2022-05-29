let message;

const isEscapeKey = (evt) => evt.key === 'Escape';

const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onDocumentClick();
  }
};

function onDocumentClick() {
  document.querySelector('.popup').remove();
  document.removeEventListener('keydown', onDocumentEscKeydown);
  document.removeEventListener('click', onDocumentClick);
}

const showPopup = () => {
  document.body.append(message);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentEscKeydown);
};

const successPopup = () => {
  message = document.querySelector('#success').content.cloneNode(true);
  showPopup();
};

const errorPopup = () => {
  message = document.querySelector('#error').content.cloneNode(true);
  showPopup();
};

export { successPopup, errorPopup };
