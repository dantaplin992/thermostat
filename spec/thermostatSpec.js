describe('thermostat', function() {
  describe('when the thermostat is instanced', function() {
    it('it starts at 20 degrees', function() {
      thermostat = new Thermostat()
      expect(thermostat.currentTemperature).toEqual(20)
    })

    it('power saving mode is on', function() {
      thermostat = new Thermostat()
      expect(thermostat.powerSaving).toEqual(true)
    })

    it('power usage is medium-usage', function() {
      thermostat = new Thermostat()
      expect(thermostat.powerUsage).toEqual('medium-usage')
    })
  })

  describe('the temperature can be', function() {
    it('increased', function() {
      thermostat = new Thermostat()
      thermostat._up(5)
      expect(thermostat.currentTemperature).toEqual(25)
    })

    it('decreased', function() {
      thermostat = new Thermostat()
      thermostat._down(5)
      expect(thermostat.currentTemperature).toEqual(15)
    })

    it('reset back to 20', function() {
      thermostat = new Thermostat()
      thermostat._down(5)
      expect(thermostat.currentTemperature).toEqual(15)
      thermostat.resetTemperature()
      expect(thermostat.currentTemperature).toEqual(20)
    })
  })

  describe('the temperature is constrained', function() {
    it('to a minimum of 10', function() {
      thermostat = new Thermostat()
      thermostat._down(15)
      expect(thermostat.currentTemperature).toEqual(10)
    })

    it('to a maximum of 25 if power saving mode is on', function() {
      thermostat = new Thermostat()
      thermostat._up(10)
      expect(thermostat.currentTemperature).toEqual(25)
    })

    it('to a maximum of 32 if power saving mode is off', function() {
      thermostat = new Thermostat()
      thermostat.switchPowerSaving()
      thermostat._up(20)
      expect(thermostat.currentTemperature).toEqual(32)
    })
  })

  describe('power usage', function() {
    it('is low if the temperature is at or below 18', function () {
      thermostat = new Thermostat()
      thermostat._down(2)
      expect(thermostat.currentTemperature).toEqual(18)
      expect(thermostat.powerUsage).toEqual("low-usage")
      thermostat._down(1)
      expect(thermostat.currentTemperature).toEqual(17)
      expect(thermostat.powerUsage).toEqual("low-usage")
    })

    it('is high if the temperature is above 25', function () {
      thermostat = new Thermostat()
      thermostat.switchPowerSaving()
      thermostat._up(6)
      expect(thermostat.currentTemperature).toEqual(26)
      expect(thermostat.powerUsage).toEqual('high-usage')
    })
  })
})