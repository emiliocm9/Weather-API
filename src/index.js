import unsplashApi from './photo';

const fetch = require('node-fetch');

const API_KEY = '590be985d863c65642e5fbf9e410de56';
const searchButton = document.getElementById('search');
const fahrenheitButton = document.getElementById('fahrenheit');
const celsiusButton = document.getElementById('celsius');
const mainDOM = document.querySelector('#image-body');
const mainICO = document.querySelector('#icon-image');

fahrenheitButton.addEventListener('click', async () => {
  try {
    const newcity = document.getElementById('city-title').textContent;
    const callFar = await toggleMetric('imperial', newcity);
  } catch {
    alert("Error: there's no informationa available yet.")
  }
})

celsiusButton.addEventListener('click', async () => {
  try {
    const newcityCel = document.getElementById('city-title').textContent;
    const callCel = await toggleMetric('metric', newcityCel);
  } catch {
    alert("Error: there's no informationa available yet.")
  }
})

const toggleColor = (metric) => {
  if (metric == 'imperial') {
    fahrenheitButton.classList.replace('btn-secondary', 'btn-success');
    celsiusButton.classList.replace('btn-success', 'btn-secondary');
  } else {
    celsiusButton.classList.replace('btn-secondary', 'btn-success');
    fahrenheitButton.classList.replace('btn-success', 'btn-secondary');
  }
}

searchButton.addEventListener('click', async () => {
  try {
    const city = document.getElementById('inlineFormInputName2').value;
    const repo = await getImage(city);
    const call = await toggleMetric('metric', city);
    document.getElementById('inlineFormInputName2').value = '';
  } catch {
    alert("Sorry: we couldn't find your city");
  }
});

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
