import './form.js';
import './slider.js';
import { setUserFromSubmit } from './form-validation.js';
import { toggleForms, loadMap } from './map.js';
import { showSuccessPopup, showErrorPopup } from './popup.js';

toggleForms(true);
loadMap();

setUserFromSubmit(showSuccessPopup, showErrorPopup);
