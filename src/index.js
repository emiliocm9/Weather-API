import eventsCaller from './initial';
import { searchButton } from './constants';

eventsCaller();

window.onload = () => {
  document.getElementById('inlineFormInputName2').value = 'Mexico City';
  searchButton.click();
};
