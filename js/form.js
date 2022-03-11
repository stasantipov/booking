const AD_FORM = document.querySelector('.ad-form');
const FILTERS_FORM = document.querySelector('.map__filters');

const toggleClass = (element, className, value) => {
  element.classList.toggle(className, value);
};

const toggleFormElements = (formElements, value) => {
  formElements.forEach((element) => {element.disabled = value;});
};

const toggleAdForm = (value) => {
  toggleClass(AD_FORM, 'ad-form--disabled', value);
  toggleFormElements(AD_FORM.querySelectorAll('fieldset'), !value);
};

const toggleFiltersForm = (value) => {
  toggleClass(FILTERS_FORM, 'map__filters--disabled', value);
  toggleFormElements(FILTERS_FORM.querySelectorAll('select, .map__features'), value);
};

const deactivateForms = () => {
  toggleAdForm(true);
  toggleFiltersForm(true);
};

const activateForms = () => {
  toggleAdForm(false);
  toggleFiltersForm(false);
};

export {deactivateForms, activateForms};
