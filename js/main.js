import {OFFERS} from './data.js';
import {createOffer} from './offer.js';
import './util.js';
const fragment = document.createDocumentFragment();

OFFERS.forEach((offer) => fragment.append(createOffer(offer)));

document.querySelector('#map-canvas').append(fragment);
