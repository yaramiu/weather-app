import { Weather } from "./weather";

export async function getWeatherData(location) {
  let weatherData;
  try {
    const request = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=4a149ed226274f929e2153700230106&q=${location}`
    );
    weatherData = await request.json();
  } catch (error) {
    console.error(error);
  }

  const weather = processWeatherData(weatherData);
  return weather;
}

function processWeatherData(weatherData) {
  const weather = new Weather();
  weather.location.country = weatherData.location.country;
  weather.location.region = weatherData.location.region;
  weather.location.city = weatherData.location.name;

  const weatherImg = document.createElement("img");
  weatherImg.src = weatherData.current.condition.icon;
  weather.condition.icon = weatherImg;
  weather.condition.text = weatherData.current.condition.text;

  weather.temperature.celsius = weatherData.current.temp_c;
  weather.temperature.fahrenheit = weatherData.current.temp_f;

  weather.precipitation = weatherData.current.precip_mm;
  weather.humidity = weatherData.current.humidity;
  weather.windSpeed = weatherData.current.wind_kph;

  return weather;
}
