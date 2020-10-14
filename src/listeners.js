const clickFahrenheit = async () => {
  try {
    const newcity = document.getElementById('city-title').textContent;
    const callFar = await toggleMetric('imperial', newcity);
  } catch {
    alert("Error: there's no informationa available yet.")
  }
}

const clickCelsius = async () => {
  try {
    const newcityCel = document.getElementById('city-title').textContent;
    const callCel = await toggleMetric('metric', newcityCel);
  } catch {
    alert("Error: there's no informationa available yet.")
  }
}

const clickSearch = async () => {
  try {
    const city = document.getElementById('inlineFormInputName2').value;
    const repo = await getImage(city);
    const call = await toggleMetric('metric', city);
    document.getElementById('inlineFormInputName2').value = '';
  } catch {
    alert("Sorry: we couldn't find your city");
  }
}