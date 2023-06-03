import { getWeatherData } from "./data";

export function getUserInput() {
  const locationInput = document.getElementById("location");

  window.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      try {
        const weather = await getWeatherData(locationInput.value.toLowerCase());
        console.log(weather);
      } catch (error) {
        console.error(error);
      }
    }
  });
}
