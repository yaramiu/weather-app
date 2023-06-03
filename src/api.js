export async function getWeatherData(location) {
  const request = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=4a149ed226274f929e2153700230106&q=${location}`
  );
  const weatherData = await request.json();
  console.log(weatherData);
}
