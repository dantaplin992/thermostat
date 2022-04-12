const thermostat = new Thermostat();

document.addEventListener('DOMContentLoaded', () => {
  updateTemperature();
});

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