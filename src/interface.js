const thermostat = new Thermostat();
let weatherTemp;
let city;

document.addEventListener('DOMContentLoaded', () => {
  updateTemperature();
  displayWeather('London,gb')
});

const selectElement = document.querySelector('#current-city')
selectElement.addEventListener('change', (event) => {
  city = event.target.value
  displayWeather(city)
})

document.querySelector('#temperature-up').addEventListener('click', () => {
  thermostat._up(1);
  updateTemperature();
});

document.querySelector('#temperature-down').addEventListener('click', () => {
  thermostat._down(1);
  updateTemperature();
});

document.querySelector('#temperature-reset').addEventListener('click', () => {
  thermostat.resetTemperature();
  updateTemperature();
});

document.querySelector('#power-saving-mode').addEventListener('click', () => {
  thermostat.switchPowerSaving();
  updatePowerSavingText();
});

const updateTemperature = () => {
  document.querySelector('#temperature').innerText = thermostat.currentTemperature;
  document.querySelector('#temperature').className = thermostat.powerUsage;
}

const updatePowerSavingText = () => {
  document.querySelector('#power-saving-status').innerText = thermostat.powerSavingText();
}

const displayWeather = (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f059f509764959c5fbd965afbf74106&units=metric`
  fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature').innerText = data.main.temp
  });
}
