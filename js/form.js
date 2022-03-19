const adForm = document.querySelector('.ad-form');
const filtersForm = document.querySelector('.map__filters');
const price = document.querySelector('#price');
const type = document.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const rooms = document.querySelector('#room_number');
const guests = document.querySelector('#capacity');
const avatar = document.querySelector('#avatar');
const preview = document.querySelector('.ad-form-header__preview');
const avatarImg = preview.querySelector('img');
const photos = document.querySelector('#images');
const photosContainer = document.querySelector('.ad-form__photo-container');
const resetBtn = document.querySelector('.ad-form__reset');
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
  toggleClass(adForm, 'ad-form--disabled', value);
  toggleFormElements(adForm.querySelectorAll('fieldset'), value);
};

const toggleFiltersForm = (value) => {
  toggleClass(filtersForm, 'map__filters--disabled', value);
  toggleFormElements(filtersForm.querySelectorAll('select, .map__features'), value);
};

const deactivateForms = () => {
  toggleAdForm(true);
  toggleFiltersForm(true);
};

const activateForms = () => {
  toggleAdForm(false);
  toggleFiltersForm(false);
};

const createImage = (files) => {
  const reader = new FileReader();
  const div = document.createElement('div');
  const photo = document.createElement('img');
  div.classList.add('ad-form__photo');
  div.classList.add('photo');
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

const resetForm = () => {
  adForm.reset();
  avatar.files.value = 'img/muffin-grey.svg';
  avatarImg.src = 'img/muffin-grey.svg';
  photos.files.value = '';
  const userPhotos = document.querySelectorAll('.photo');
  userPhotos.forEach((element) => element.remove());
};

resetBtn.addEventListener('click', resetForm);

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
