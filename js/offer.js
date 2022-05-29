const TEMPLATE_FRAGMENT = document.querySelector('#card').content;
const TEMPLATE = TEMPLATE_FRAGMENT.querySelector('.popup');
const PHOTO_TEMPLATE = TEMPLATE_FRAGMENT.querySelector('.popup__photo');
const TYPE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const hideElement = (element) => {element.classList.add('hidden');};

const addValue = (element, value) => {element.innerHTML = value;};

const createOffer = ({offer, author}) => {
  const element = TEMPLATE.cloneNode(true);
  if (offer.title) {
    addValue(element.querySelector('.popup__title'), offer.title);
  } else {
    hideElement(element.querySelector('.popup__title'));
  }

  if (offer.adress) {
    addValue(element.querySelector('.popup__text--address'), offer.adress);
  } else {
    hideElement(element.querySelector('.popup__text--address'));
  }

  if (offer.price) {
    addValue(element.querySelector('.popup__text--price'), `${offer.price} ₽/ночь`);
  } else {
    hideElement(element.querySelector('.popup__text--price'));
  }

  if (offer.type) {
    addValue(element.querySelector('.popup__type'), TYPE[offer.type]);
  } else {
    hideElement(element.querySelector('.popup__type'));
  }

  if (offer.rooms && offer.guests) {
    addValue(element.querySelector('.popup__text--capacity'), `${offer.rooms} комнаты для ${offer.guests} гостей`);
  } else {
    hideElement(element.querySelector('.popup__text--capacity'));
  }

  if (offer.checkin && offer.checkout) {
    addValue(element.querySelector('.popup__text--time'), `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  } else {
    hideElement(element.querySelector('.popup__text--time'));
  }

  if (offer.features) {
    element.querySelectorAll('.popup__feature').forEach((featureListItem) => {
      const isNecessary = offer.features.some(
        (feature) => featureListItem.classList.contains(`popup__feature--${feature}`)
      );
      if(!isNecessary){
        featureListItem.remove();
      }
    });
  } else {
    hideElement(element.querySelector('.popup__features'));
  }

  if (offer.description) {
    addValue(element.querySelector('.popup__description'), offer.description);
  } else {
    hideElement(element.querySelector('.popup__description'));
  }

  if(offer.photos) {
    element.querySelector('.popup__photos').innerHTML = '';
    offer.photos.forEach( (photo) => {
      const item = PHOTO_TEMPLATE.cloneNode(true);
      item.src = photo;
      element.querySelector('.popup__photos').append(item);
    });
  } else {
    hideElement(element.querySelector('.popup__photos'));
  }

  if (author.avatar) {
    element.querySelector('.popup__avatar').src = author.avatar;
  } else {
    hideElement(element.querySelector('.popup__avatar'));
  }
  return element;
};

export { createOffer };
