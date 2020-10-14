import {clickFahrenheit, clickCelsius, clickSearch} from './listeners';
import {fahrenheitButton, celsiusButton, searchButton} from './constants';

searchButton.addEventListener('click', () => clickSearch());

fahrenheitButton.addEventListener('click', () => clickFahrenheit());

celsiusButton.addEventListener('click', () => clickCelsius());
