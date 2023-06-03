import celsiusSvg from "./images/temperature-celsius.svg";
import fahrenheitSvg from "./images/temperature-fahrenheit.svg";
import celsiusInactiveSvg from "./images/temperature-celsius-inactive.svg";
import fahrenheitInactiveSvg from "./images/temperature-fahrenheit-inactive.svg";

export function addWeatherInfoToPage(weather) {
  const bodyDiv = document.querySelector("div.body");
  const weatherDiv = document.createElement("div");
  weatherDiv.classList.add("weather");

  addLocationToPage(weather.location, bodyDiv);
  addIconToPage(weather.condition.icon, weatherDiv);
  addInfoToPage(weather, weatherDiv);
  bodyDiv.appendChild(weatherDiv);
}

function addLocationToPage(location, bodyDiv) {
  const locationDiv = document.createElement("div");
  locationDiv.classList.add("location");
  const locationHeader = document.createElement("h3");
  locationHeader.textContent = `${location.city}, ${location.region}, ${location.country}`;
  locationDiv.appendChild(locationHeader);
  bodyDiv.appendChild(locationDiv);
}

function addIconToPage(icon, weatherDiv) {
  icon.classList.add("icon");
  weatherDiv.appendChild(icon);
}

function addInfoToPage(weather, weatherDiv) {
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info");

  addTemperatureToInfo(weather.temperature, infoDiv);

  const otherInfoDiv = document.createElement("div");
  otherInfoDiv.classList.add("other-info");
  addWeatherInfo(weather, "precipitation", otherInfoDiv);
  addWeatherInfo(weather, "humidity", otherInfoDiv);
  addWeatherInfo(weather, "wind-speed", otherInfoDiv);
  infoDiv.appendChild(otherInfoDiv);

  weatherDiv.appendChild(infoDiv);
}

function addTemperatureToInfo(temperature, infoDiv) {
  const temperatureDiv = document.createElement("div");
  temperatureDiv.classList.add("temperature");

  const temperatureValueP = document.createElement("p");
  temperatureValueP.classList.add("value");
  temperatureValueP.textContent = temperature.celsius;
  const celsiusImg = document.createElement("img");
  celsiusImg.classList.add("celsius");
  celsiusImg.src = celsiusSvg;
  const fahrenheitImg = document.createElement("img");
  fahrenheitImg.classList.add("fahrenheit");
  fahrenheitImg.src = fahrenheitSvg;

  temperatureDiv.appendChild(temperatureValueP);
  temperatureDiv.appendChild(celsiusImg);
  temperatureDiv.appendChild(fahrenheitImg);

  makeImgActive(celsiusImg);
  makeImgInactive(fahrenheitImg);
  styleImg(celsiusImg, "C");
  styleImg(fahrenheitImg, "F");

  infoDiv.appendChild(temperatureDiv);
}

function addWeatherInfo(weather, infoType, infoDiv) {
  const infoP = document.createElement("p");
  infoP.classList.add(infoType);

  if (infoType === "precipitation") {
    infoP.textContent = `Precipitation: ${weather.precipitation}%`;
  } else if (infoType === "humidity") {
    infoP.textContent = `Humidity: ${weather.humidity}%`;
  } else if (infoType === "wind-speed") {
    infoP.textContent = `Wind speed: ${weather.windSpeed} km/h`;
  }

  infoDiv.appendChild(infoP);
}

export function clearPage() {
  const bodyDiv = document.querySelector("div.body");
  while (bodyDiv.lastChild) {
    bodyDiv.removeChild(bodyDiv.lastChild);
  }
}

export function makeImgActive(img) {
  img.classList.remove("inactive");
  img.classList.add("active");
}

export function makeImgInactive(img) {
  img.classList.remove("active");
  img.classList.add("inactive");
}

export function styleImg(img, unitType) {
  if (img.classList.contains("active")) {
    if (unitType === "C") {
      img.src = celsiusSvg;
    } else if (unitType === "F") {
      img.src = fahrenheitSvg;
    }
  } else if (img.classList.contains("inactive")) {
    if (unitType === "C") {
      img.src = celsiusInactiveSvg;
    } else if (unitType === "F") {
      img.src = fahrenheitInactiveSvg;
    }
  }
}

export function changeTemperature(weather, unitType) {
  const temperatureValueP = document.querySelector(".value");
  temperatureValueP.textContent = weather.getTemperature(unitType);
}
