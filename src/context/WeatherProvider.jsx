import { createContext, useState } from "react";
import * as weatherAPI from "src/utils/weatherAPI";

/**
 * WeatherContext that holds the results of the weather API
 * Weather API is used by multiple components so context is used to avoid prop drilling
 *
 * Open-Metero requires the longtitude and latitude of a place. We need some way to get those 2 information from a place (ex. Berlin)
 * - We can use the Geocoding API section of Open-Metero to search a city and receive back a longtitude and latitude.
 *
 */

export const WeatherContext = createContext();
export const TEMP_UNITS = { CELSIUS: "°C", FAHRENHEIT: "°F" };
export const WIND_UNITS = { KMH: "km/h", MPH: "mph" };
export const PRECIP_UNITS = { MM: "mm", INCHES: "inches" };

export function WeatherProvider({ children, value }) {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [tempUnit, setTempUnit] = useState(TEMP_UNITS.CELSIUS);
  const [windUnit, setWindUnit] = useState(WIND_UNITS.KMH);
  const [precipUnit, setPrecipUnit] = useState(PRECIP_UNITS.MM);

  const searchCoords = async (place) => {
    const locations = await weatherAPI.searchCoords(place);
    return locations;
  };

  const searchWeather = async (location) => {
    const info = await weatherAPI.searchWeatherApi(location, "celsius"); // Change later
    setWeatherInfo(info);
    console.log(info);
  };

  const values = {
    searchCoords,
    searchWeather,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
}

// searchCards("Berlin");
