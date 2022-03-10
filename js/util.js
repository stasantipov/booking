const getRandomNumber = (min, max) => {
  min = Math.abs(min);
  max = Math.abs(max);
  if (min === max) {
    return min;
  } else if (min > max) {
    throw new Error('Incorrect range. Your minimun number is greater than maximum');
  }
  return (Math.random() * (max - min + 1) + min);
};
const getRoundedRandomNumber = (min, max) => Math.floor(getRandomNumber(min, max));
const getRandomNumberWithFloat = (min, max, floatNumber = 1) => Number(getRandomNumber(min, max).toFixed(floatNumber));
const getRandomArrayElement = (elements) => elements[getRoundedRandomNumber(0, elements.length - 1)];

const getRandomArray = (source) => {
  const array = [];
  const max = getRoundedRandomNumber(1, source.length);
  while (array.length < max) {
    const element = source[getRoundedRandomNumber(0, source.length-1)];
    if(!array.includes(element)) {
      array.push(element);
    }
  }
  return array;
};

export {getRoundedRandomNumber, getRandomNumberWithFloat, getRandomArray, getRandomArrayElement};
