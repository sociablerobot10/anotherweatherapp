import { createContext } from "react";
import { fetchWeatherApi } from "openmeteo";

/**
 * WeatherContext that holds the results of the weather API
 * Weather API is used by multiple components so context is used to avoid prop drilling
 *
 * Open-Metero requires the longtitude and latitude of a place. We need some way to get those 2 information from a place (ex. Berlin)
 * - We can use the Geocoding API section of Open-Metero to search a city and receive back a longtitude and latitude.
 *
 */
import { fetchWeatherApi } from "openmeteo";

const WeatherContext = createContext();

async function searchCords(place) {
  const params = {
    name: place,
    count: 5,
  };
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${params.name}&count=${params.count}`;

  try {
    const response = await fetch(url, { method: "GET" });
    console.log(response);
    const locations_data = await response.json().data;
  } catch (error) {
    console.error(error.message);
  }
}

async function searchWeatherApi(searchInput) {
  // sample code for now
  const params = {
    latitude: 52.52,
    longitude: 13.41,
    daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
    hourly: "temperature_2m",
    current: ["temperature_2m", "relative_humidity_2m", "apparent_temperature"],
    bounding_box: "-90,-180,90,180",
  };

  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);
}

export default function WeatherProvider({ children }) {
  return <WeatherContext.Provider>{children}</WeatherContext.Provider>;
}

export { WeatherContext };
