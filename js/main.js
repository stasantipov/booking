const BUILDING_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHEKIN_TIME = ['12:00', '13:00', '14:00'];
const CHECKOUT_TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg']
const ADS = [];
const ADS__COUNT = 10;
const MAXIMUM_GUESTS = 10;
const MAXIMUM_ROOMS = 10;
const MAXIMUM_PRICE = 10000;
const MINIMUM_LAT = 35.65000;
const MAXIMUM_LAT = 35.70000;
const MINIMUM_LNG = 139.70000;
const MAXIMUM_LNG = 139.80000;

function getRandomNumber(min, max) {
  min = Math.abs(min);
  max = Math.abs(max);
  if (min === max) {
    return min;
  } else if (min > max) {
    throw new Error('Incorrect range. Your minimun number is greater than maximum');
  }
  return (Math.random() * (max - min + 1) + min);
}

const getRoundedRandomNumber = (min, max) => Math.floor(getRandomNumber(min, max));

const getRandomNumberWithFloat = (min,max,floatNumber = 1) => Number(getRandomNumber(min, max).toFixed(floatNumber));

function getRandomArray(source) {
  let array = [];
  const max = getRoundedRandomNumber(1, source.length);
  for (let i = 0; array.length <= max; i++){
    array = [...new Set(array)];
    array.push(source[getRoundedRandomNumber(0, source.length-1 )]);
  }
  return array;
}

const getRandomArrayElement = (elements) => elements[getRoundedRandomNumber(0, elements.length - 1)];

function craeateAd (count) {
  for (let i = 1; i <= count; i++) {
    const lat = getRandomNumberWithFloat(MINIMUM_LAT, MAXIMUM_LAT, 5);
    const lng = getRandomNumberWithFloat(MINIMUM_LNG, MAXIMUM_LNG, 5);
    ADS.push( {
      author: {
        avatar: `img/avatars/user${i < 10 ? '0' + i : i}.png`,
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
    });
  }
}

craeateAd(ADS__COUNT);
