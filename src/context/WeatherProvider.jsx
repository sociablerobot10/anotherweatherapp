import { createContext } from "react";
/**
 * WeatherContext that holds the results of the weather API
 * Weather API is used by multiple components so context is used to avoid prop drilling
 *
 */
import { fetchWeatherApi } from "openmeteo";

const WeatherContext = createContext();

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
