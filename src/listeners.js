import { getImage } from './photo';
import { toggleMetric } from './display';

const clickFahrenheit = async () => {
  try {
    const newcity = document.getElementById('city-title').textContent;
    toggleMetric('imperial', newcity);
  } catch (error) {
    console.log(error);
  }
};

const clickCelsius = async () => {
  try {
    const newcityCel = document.getElementById('city-title').textContent;
    toggleMetric('metric', newcityCel);
  } catch (error) {
    console.log(error);
  }
};

const clickSearch = async () => {
  try {
    const city = document.getElementById('inlineFormInputName2').value;
    getImage(city);
    toggleMetric('metric', city);
    document.getElementById('inlineFormInputName2').value = '';
  } catch (error) {
    console.log(error);
  }
};

export { clickFahrenheit, clickCelsius, clickSearch };
