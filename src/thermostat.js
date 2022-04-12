class Thermostat {
  constructor() {
    this.currentTemperature = 20
    this.powerSaving = true
    this.maxTemperature = 25
    this.powerUsage = 'medium-usage'
  }

  _up(degrees) {
    this.currentTemperature += degrees
    if(this.currentTemperature > this.maxTemperature) this.currentTemperature = this.maxTemperature
    this._updatePowerUsage()
  }
  
  _down(degrees) {
    this.currentTemperature -= degrees
    if(this.currentTemperature < 10) this.currentTemperature = 10
    this._updatePowerUsage()
  }

  _checkPowerUsage(temp) {
    if(temp <= 18) return "low-usage"
    if(temp > 18 && temp <= 25) return "medium-usage"
    return "high-usage"
  }

  _updatePowerUsage() {
    this.powerUsage = this._checkPowerUsage(this.currentTemperature)
  }

  switchPowerSaving() {
    if(this.powerSaving) {
      this.powerSaving = false
      this.maxTemperature = 32
    } else {
      this.powerSaving = true
      this.maxTemperature = 25
    }
  }

  resetTemperature() {
    this.currentTemperature = 20
    this._updatePowerUsage()
  }

  powerSavingText() {
    if(this.powerSaving) return "on"
    return "off"
  }
}
