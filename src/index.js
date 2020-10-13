const fetch = require('node-fetch');

const API_KEY = '590be985d863c65642e5fbf9e410de56';
const open = document.querySelector('.texto');
const searchButton = document.getElementById('search');

searchButton.addEventListener('click', async (e) => {
  const city = document.getElementById('inlineFormInputName2').value;
  const call = await getCityData(city);
  console.log(call);
  document.getElementById('inlineFormInputName2').value = '';
});

const getCityData = async (city) => {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=590be985d863c65642e5fbf9e410de56`);
  let data = await response.json();
  return displayInfo(data);
}

const displayInfo = (data) => {
  document.getElementById('city-title').textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById('city-temp').textContent = data.main.temp;
  document.getElementById('city-description').textContent = data.weather[0].description;
  document.getElementById('city-humidity').textContent = data.main.humidity;
  document.getElementById('city-pressure').textContent = data.main.pressure;
  document.getElementById('city-tempmin').textContent = data.main.temp_min;
  document.getElementById('city-tempmax').textContent = data.main.temp_max;
}

const tempCen = (temp) => {
  return (temp - 273.15).toFixed(2);
}
