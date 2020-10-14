import unsplashApi from './photo';

const fetch = require('node-fetch');

const API_KEY = '590be985d863c65642e5fbf9e410de56';
const searchButton = document.getElementById('search');
const fahrenheitButton = document.getElementById('fahrenheit');
const celsiusButton = document.getElementById('celsius');
const mainDOM = document.querySelector('body');

fahrenheitButton.addEventListener('click', async () => {
  const newcity = document.getElementById('city-title').textContent;
  const callFar = await toggleMetric('imperial', newcity);
})

celsiusButton.addEventListener('click', async () => {
  const newcityCel = document.getElementById('city-title').textContent;
  const callCel = await toggleMetric('metric', newcityCel);
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
  const city = document.getElementById('inlineFormInputName2').value;
  const repo = await getImage(city);
  const call = await toggleMetric('metric', city);
  document.getElementById('inlineFormInputName2').value = '';
});


/* const searchForCity = (city) => {
  mainLoader.style.display = 'block';

  UnsplashApi.getImageBySearch(city).then((response) => {
    mainDOM.style.backgroundImage = `url(${response.url})`;
    mainLoader.style.display = 'none';
    OpenWeatherApi.getWeatherByCity(city, degreeUnit).then((weather) => {
      updateWeather(weather);
    }).catch((err) => {
      errorMessage.style.display = 'block';
      errorMessage.textContent = err.message;
    });
  });
}; */

const getImage = async (city) => {
  let response = await unsplashApi.getImageBySearch(city);
  mainDOM.style.backgroundImage = `url(${response.url})`;
  console.log(response.url)
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
