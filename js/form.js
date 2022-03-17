const AD_FORM = document.querySelector('.ad-form');
const FILTERS_FORM = document.querySelector('.map__filters');
const price = document.querySelector('#price');
const type = document.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const rooms = document.querySelector('#room_number');
const guests = document.querySelector('#capacity');
const avatar = document.querySelector('#avatar');
const preview = document.querySelector('.ad-form-header__preview');
const photos = document.querySelector('#images');
const photosContainer = document.querySelector('.ad-form__photo-container');
const typePrice = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
  hotel: 3000
};
guests.value = rooms.value;

const toggleClass = (element, className, value) => {
  element.classList.toggle(className, value);
};

const toggleFormElements = (formElements, value) => {
  formElements.forEach((element) => {element.disabled = value;});
};

const toggleAdForm = (value) => {
  toggleClass(AD_FORM, 'ad-form--disabled', value);
  toggleFormElements(AD_FORM.querySelectorAll('fieldset'), value);
};

const toggleFiltersForm = (value) => {
  toggleClass(FILTERS_FORM, 'map__filters--disabled', value);
  toggleFormElements(FILTERS_FORM.querySelectorAll('select, .map__features'), value);
};

const deactivateForms = () => {
  toggleAdForm(true);
  toggleFiltersForm(true);
};

const activateForms = () => {
  toggleAdForm(false);
  toggleFiltersForm(false);
};

//Подумать над этими функциями
const createImage = (files) => {
  const reader = new FileReader();
  const div = document.createElement('div');
  const photo = document.createElement('img');
  div.classList.add('ad-form__photo');
  reader.addEventListener('load', () => {
    photo.src = reader.result;
    div.append(photo);
    photosContainer.append(div);
  });
  if (files) {
    return reader.readAsDataURL(files);
  }
  photo.src = 'img/muffin-grey.svg';
};

const createAvatar = (file) => {
  const avatarImg = preview.querySelector('img');
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    avatarImg.src = reader.result;
  });
  if (file) {
    reader.readAsDataURL(file);
  }
  avatarImg.src = 'img/muffin-grey.svg';
};

const handleFileSelect = (evt) => {
  const file = evt.target.files[0];
  createAvatar(file);
};

const handleMultiFileSelect = (evt) => {
  const files = evt.target.files;
  for(let i = 0; i <= files.length; i++) {
    createImage(files[i]);
  }
};

// 4. Сделать дроп зону

type.addEventListener('change', () => {
  price.placeholder = typePrice[type.value];
  price.min = typePrice[type.value];
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

avatar.addEventListener('change', handleFileSelect, false);
photos.addEventListener('change', handleMultiFileSelect, false);

export { deactivateForms, activateForms, price, typePrice };
