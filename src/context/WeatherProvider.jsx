import { createContext } from "react";
// import { fetchWeatherApi } from "openmeteo";

/**
 * WeatherContext that holds the results of the weather API
 * Weather API is used by multiple components so context is used to avoid prop drilling
 *
 * Open-Metero requires the longtitude and latitude of a place. We need some way to get those 2 information from a place (ex. Berlin)
 * - We can use the Geocoding API section of Open-Metero to search a city and receive back a longtitude and latitude.
 *
 */

const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
  return <WeatherContext.Provider>{children}</WeatherContext.Provider>;
}

export { WeatherContext };
