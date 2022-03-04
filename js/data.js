import {getRoundedRandomNumber, getRandomNumberWithFloat, getRandomArray,getRandomArrayElement} from './util.js';

const MINIMUM_LAT = 35.65000;
const MAXIMUM_LAT = 35.70000;
const MINIMUM_LNG = 139.70000;
const MAXIMUM_LNG = 139.80000;
const MAXIMUM_GUESTS = 10;
const MAXIMUM_ROOMS = 10;
const MAXIMUM_PRICE = 10000;
const BUILDING_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHEKIN_TIME = ['12:00', '13:00', '14:00'];
const CHECKOUT_TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const craeateAd = (_elem, id) => {
  const lat = getRandomNumberWithFloat(MINIMUM_LAT, MAXIMUM_LAT, 5);
  const lng = getRandomNumberWithFloat(MINIMUM_LNG, MAXIMUM_LNG, 5);
  return {
    author: {
      avatar: `img/avatars/user${String(++id).padStart(2, '0')}.png`,
    },
    offer: {
      title: 'Обьявление о сдаче',
      address: lat, lng,
      price: getRoundedRandomNumber(1, MAXIMUM_PRICE),
      type: getRandomArrayElement(BUILDING_TYPES),
      rooms: getRoundedRandomNumber(1, MAXIMUM_ROOMS),
      guests: getRoundedRandomNumber(1, MAXIMUM_GUESTS),
      checkin: getRandomArrayElement(CHEKIN_TIME),
      checkout: getRandomArrayElement(CHECKOUT_TIME),
      features: getRandomArray(FEATURES),
      description: 'Уютный домик в центре Берлина',
      photos: getRandomArray(PHOTOS),
    },
    location: {
      lat: lat,
      lng: lng,
    }
  };
};

export {craeateAd};
