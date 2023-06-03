import { getWeatherData } from "./data";
import {
  addWeatherInfoToPage,
  clearPage,
  makeImgActive,
  makeImgInactive,
  styleImg,
  changeTemperature,
} from "./dom";

export function getLocationInput() {
  const locationInput = document.getElementById("location");

  window.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      try {
        const weather = await getWeatherData(locationInput.value.toLowerCase());
        clearPage();
        addWeatherInfoToPage(weather);
        setupImgButtons(weather);
      } catch (error) {
        clearPage();
        console.error(error);
      }
    }
  });
}

function setupImgButtons(weather) {
  const celsiusImg = document.querySelector("img.celsius");
  const fahrenheitImg = document.querySelector("img.fahrenheit");

  celsiusImg.addEventListener("click", () => {
    makeImgInactive(fahrenheitImg);
    makeImgActive(celsiusImg);

    changeTemperature(weather, "C");

    styleImg(fahrenheitImg, "F");
    styleImg(celsiusImg, "C");
  });

  fahrenheitImg.addEventListener("click", () => {
    makeImgInactive(celsiusImg);
    makeImgActive(fahrenheitImg);

    changeTemperature(weather, "F");

    styleImg(celsiusImg, "C");
    styleImg(fahrenheitImg, "F");
  });
}
