import {getImage} from './photo';
import {toggleMetric} from './display';

const clickFahrenheit = async () => {
  try {
    const newcity = document.getElementById('city-title').textContent;
    const callFar = await toggleMetric('imperial', newcity);
  } catch (error) {
    console.error(error);
    alert("Error: there's no informationa available yet.")
  }
}

const clickCelsius = async () => {
  try {
    const newcityCel = document.getElementById('city-title').textContent;
    const callCel = await toggleMetric('metric', newcityCel);
  } catch (error) {
    console.error(error);
    alert("Error: there's no informationa available yet.")
  }
}

const clickSearch = async () => {
  try {
    const city = document.getElementById('inlineFormInputName2').value;
    const repo = await getImage(city);
    const call = await toggleMetric('metric', city);
    document.getElementById('inlineFormInputName2').value = '';
  } catch (error) {
    console.error(error);
    alert("Sorry: we couldn't find your city");
  }
}

export {clickFahrenheit, clickCelsius, clickSearch};
