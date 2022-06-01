import './form.js';
import './slider.js';
import { setUserFromSubmit } from './form-validation.js';
import { renderMarkers } from './map.js';
import { successPopup, errorPopup } from './popup.js';
import { getData, showError } from './api.js';
import { setMapFilters, filterOffers } from './filters.js';
import { debounce } from './debounce.js';

getData((offers) => {
  renderMarkers(offers);
  setMapFilters(debounce(
    () => renderMarkers(filterOffers(offers)),
  ));
}, () => showError('Не удалось получить данные. Попробуйте ещё раз'));

setUserFromSubmit(successPopup, errorPopup);
