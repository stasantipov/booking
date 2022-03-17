import { price } from './form.js';
const slider = document.querySelector('#slider');

noUiSlider.create(slider, {
  start: [5000],
  connect: [true, false],
  tooltips: true,
  step: 100,
  range: {
    'min': [0],
    '10%': [500, 100],
    '50%': [4000, 500],
    '70%': [10000, 500],
    'max': [100000]
  }
});

slider.noUiSlider.on('change', (values, handle) => {
  price.value = Math.floor(values[handle]);
});

export { slider };
