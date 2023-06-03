export class Weather {
  location = {};
  temperature = {};
  condition = {};
  precipitation;
  humidity;
  windSpeed;

  getTemperature(unit) {
    if (unit === "C") {
      return this.temperatureCelsius;
    } else if (unit === "F") {
      return this.temperatureFahrenheit;
    } else {
      throw new Error("Invalid temperature unit given to getTemperature");
    }
  }
}
