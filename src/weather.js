export class Weather {
  location = {};
  temperature = {};
  condition = {};
  precipitation;
  humidity;
  windSpeed;

  getTemperature(unit) {
    if (unit === "C") {
      return this.temperature.celsius;
    } else if (unit === "F") {
      return this.temperature.fahrenheit;
    } else {
      throw new Error("Invalid temperature unit given to getTemperature");
    }
  }
}
