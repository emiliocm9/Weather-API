import unsplashApi from './photo';

export const fetch = require('node-fetch');
export const API_KEY = '590be985d863c65642e5fbf9e410de56';
export const searchButton = document.getElementById('search');
export const fahrenheitButton = document.getElementById('fahrenheit');
export const celsiusButton = document.getElementById('celsius');
export const mainDOM = document.querySelector('#image-body');
export const mainICO = document.querySelector('#icon-image');

fahrenheitButton.addEventListener('click', () => clickFahrenheit());

celsiusButton.addEventListener('click', () => clickCelsius());

searchButton.addEventListener('click', () => clickSearch());

const toggleColor = (metric) => {
  if (metric == 'imperial') {
    fahrenheitButton.classList.replace('btn-secondary', 'btn-success');
    celsiusButton.classList.replace('btn-success', 'btn-secondary');
  } else {
    celsiusButton.classList.replace('btn-secondary', 'btn-success');
    fahrenheitButton.classList.replace('btn-success', 'btn-secondary');
  }
}

const getImage = async (city) => {
  let response = await unsplashApi.getImageBySearch(city);
  mainDOM.classList.replace('d-none', 'd-block');
  mainDOM.src = response.url;
}

const setIcon = (data) => {
  mainICO.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  mainICO.classList.replace('d-none', 'd-block');
}

const toggleMetric = async (metric, city) => {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&appid=${API_KEY}`);
  let data = await response.json();
  return displayInfo(data, metric);
}

const checkMetric = (metric) => {
  if (metric == 'imperial') {
    return '°F';
  } else {
    return '°C';
  }
}

const displayInfo = (data, metric) => {
  var fullSunrise = new Date(data.sys.sunrise * 1000);
  var fullSunset = new Date(data.sys.sunset * 1000);
  toggleColor(metric);
  setIcon(data);
  document.getElementById('city-title').textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById('city-temp').textContent = `${data.main.temp} ${checkMetric(metric)}`;
  document.getElementById('city-description').textContent = data.weather[0].description;
  document.getElementById('city-humidity').textContent = data.main.humidity;
  document.getElementById('city-pressure').textContent = data.main.pressure;
  document.getElementById('city-tempmin').textContent = `${data.main.temp_min} ${checkMetric(metric)}`;
  document.getElementById('city-tempmax').textContent = `${data.main.temp_max} ${checkMetric(metric)}`;
  document.getElementById('sunrise-time').textContent = `${fullSunrise.getHours()}:${fullSunrise.getMinutes()}:${fullSunrise.getSeconds()} UTC`;
  document.getElementById('sunset-time').textContent = `${fullSunset.getHours()}:${fullSunset.getMinutes()}:${fullSunset.getSeconds()} UTC`;
}
