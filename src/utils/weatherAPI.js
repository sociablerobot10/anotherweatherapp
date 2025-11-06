/**
 * .js file not .jsx because we are not returning HTML. This is just javascript file
 *
 *
 */
import { fetchWeatherApi } from "openmeteo";
/**
 * Search for the longtitude and latitude of a location.
 * @param {string} place location of a city to search for
 * @returns {Array} returns a list of locations and their data that match the place name
 */
async function searchCords(place) {
  const params = {
    name: place,
    count: 5,
  };
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${params.name}&count=${params.count}`;

  try {
    const response = await fetch(url, { method: "GET" });
    const locations_data = await response.json();
    return locations_data.results;
  } catch (error) {
    console.error("error", error.message);
  }
}
/**
 * Searches the weather information of the specified location
 * @param {*} location location of the place the user selected
 */
async function searchWeatherApi(location) {
  const params = {
    latitude: location.latitude,
    longitude: location.longitude,
    daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],

    hourly: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "rain",
      "showers",
      "snowfall",
      "weather_code",
    ],
  };
  try {
    const url = "https://api.open-meteo.com/v1/forecast";
    const response = await fetchWeatherApi(url, params); // returns an array of weatherapiresponse.
    console.log("response", response);
    return response[0];
  } catch (error) {
    console.error(error);
  }
}

const location = await searchCords("Oakland");

const weather = await searchWeatherApi(location[0]);
// needs to convert the hourly() to readable, look at docs how they do it.
console.log(weather.hourly());
