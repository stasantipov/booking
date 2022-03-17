import { OFFERS } from './data.js';
import { createOffer } from './offer.js';
import './util.js';
import { activateForms, deactivateForms } from './form.js';
import './slider.js';
import './form-validation.js';
deactivateForms();

const fragment = document.createDocumentFragment();

OFFERS.forEach((offer) => fragment.append(createOffer(offer)));

document.querySelector('#map-canvas').append(fragment);

activateForms();
