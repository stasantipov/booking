import './form.js';
import './slider.js';
import { setUserFromSubmit } from './form-validation.js';
import { createMarker } from './map.js';
import { successPopup, errorPopup } from './popup.js';
import { getData, showError } from './api.js';
const OFFERS_COUNT = 10;


getData((offers) => {
  offers.slice(0, OFFERS_COUNT).forEach((point) => createMarker(point));
}, () => showError('Не удалось получить данные. Попробуйте ещё раз'));

setUserFromSubmit(successPopup, errorPopup);
