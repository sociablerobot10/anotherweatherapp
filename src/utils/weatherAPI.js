/**
 * @file Calls Open-Meteo Weather API and sorts the API response into an accessible format for other files
 */

import { fetchWeatherApi } from "openmeteo";

/**
 * Search for the longtitude and latitude of a location.
 * @param {string} place location of a city to search for
 * @returns {Array} returns a list of locations and their data that match the place name
 */
async function searchCoords(place) {
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
    console.error("error", error.reason);
    return error;
  }
}

/**
 * Searches the weather information of the specified location
 * @param {Object} location location of the place the user selected
 * @param {Number} latitude latitude of the location
 * @param {Number} longitude longtitude of the location
 */
async function searchWeatherApi(location, tempUnit) {
  const params = {
    latitude: location.latitude,
    longitude: location.longitude,
    daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
    hourly: ["temperature_2m", "weather_code"],
    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "precipitation",
      "wind_speed_10m",
      "weather_code",
    ],
    temperature_unit: tempUnit,
  };
  try {
    const url = "https://api.open-meteo.com/v1/forecast";
    const response = await fetchWeatherApi(url, params); // returns an array of weatherapiresponse.
    const data = response[0];
    const current = data.current();
    const hourly = data.hourly();
    const daily = data.daily();
    const hourlyArr = hourly.variables(0).valuesArray();
    const utcOffsetSeconds = data.utcOffsetSeconds();

    const currentWeather = getCurrentWeather(current);
    const perDay = getWeatherPerDay(daily, hourlyArr, utcOffsetSeconds);
    return [currentWeather, perDay];
  } catch (error) {
    console.error(error);
  }
}

/**
 * Gets weather information of the current day and places in a neat object
 * @param {*} current
 * @returns
 */
const getCurrentWeather = (current) => ({
  temp: current.variables(0).value(),
  relativeTemp: current.variables(1).value(),
  apparentTemp: current.variables(2).value(),
  preciptation: current.variables(3).value(),
  weatherSpeed: current.variables(4).value(),
});

/**
 *
 * @param {VariablesWithTime} daily
 * @param {*} hourlyArr
 * @param {Number} utcOffsetSeconds number set back of the user timezone from UTC
 * @returns
 */
const getWeatherPerDay = (daily, hourlyArr, utcOffsetSeconds) => {
  // loop through the variables(1).length array, take the first 24 elements (12am- 11:59pm or 0:00 to 23:59) which singifies 1 day.
  // Then keep a tracker pointer of where you are in the array. Alternatively, take the index and multiply it by 24, to get the proper index of the day
  /**
   * Hourly property will have an object with a time proprty. Time property has an array where each value is a time.
   * Temperature_2M is converted into an array.
   * hourly.variables() is a ValuesWithTime object, then that object has a valuesArray() which converted to an array.
   *
   * hourly.time() and hourly.timeEnd()
   * - are bigints which are UNIX Timestamps. Unix Timestamps are in seconds. They tell you the date and time.
   * - hourly.time() = timestamp of the start of the first day
   * - hourly.timeEnd() - timestamp of the start of the last day
   *
   * hourly.interval() - represents the intervals in seconds between each data point. If you have it set as hourly then the seconds
   * are 3600 seconds = 1 hour
   *
   * hourly.variables = array, there can be 0, 1, 2, and so on. the values are based on what your selected. their indexes are how you arraned them in your params obejct
   * Exampkle:
   * hourly.variables(0) = tempe_2
   * hourly.variables(1) = weathercode
   *
   */

  /**
   * The following creates an array of 7 days. Each day is represented as an object.
   * Each object has the following:
   *  date: Date
   *  minTemp: min temp of the day
   *  maxTemp: max temp of the day
   *
   * hourly: [
   *  {
   *    hour: Date
   *   temp: temp number
   *  }
   * ]
   *
   * Inside the hourly property. An array of length 24 is created (1 day = 24 hours) SO each element in the array represent each hour of a day.
   * Before creating a Date, I get the Unix timestamp of the day that hour lies then multiple timeI (which is between 0 and 23 to represent the number of hours in a day) and
   * multiply it by 3600 (1 hour is 3600 seconds) Unix timestamp works in seconds. Then multiply by 1000 (since Dates works in miliseconds in JS)
   *
   * Next, temp property, I get the hourlyIndex for that specific day then multiply by timeI.
   * Each day will have a starting index differently in hourlyArr
   */
  const perDay = Array.from(
    {
      length:
        (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval(),
    },
    (_, i) => {
      const hourlyIndex = i * 24; // beginning index where to access the hourly array
      return {
        date: new Date(
          (Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) *
            1000
        ),
        minTemp: daily.variables(1).values(i),
        maxTemp: daily.variables(2).values(i),
        hourly: Array.from(
          {
            length: 24,
          },
          (_, timeI) => ({
            hour: new Date(
              (Number(daily.time()) +
                i * daily.interval() +
                utcOffsetSeconds +
                timeI * 3600) *
                1000
            ),
            // we get the timestamp of the start of a day. Then we multiply it by timeI * 3600. 3600seconds = 1 hour. And we do this 24 times since 1 day = 24 hour
            temp: hourlyArr[hourlyIndex + timeI],
          })
        ),
        //
      };
    }
  );
  return perDay;
};
const testConsoleLog = (hourly, daily) => {
  console.log(`daily interval: ${daily.interval()}`);
  console.log(`hour time: ${hourly.time()} hour end: ${hourly.timeEnd()}`);
  console.log(`hour interval ${hourly.interval()}`);
  console.log(`hour variables length: ${hourly.variablesLength()}`);
  console.log(
    `hour.variables(1) as an array ${hourly.variables(1).valuesArray()}`
  );
  console.log(
    `hours.variables(1).length array size which should be 168 which means 168 hours. And since a day is 24 hours. We will need to take 24 elements = 1 day ${
      hourly.variables(1).valuesArray().length
    }`
  );
};

// const weather = await searchWeatherApi(location[0], "celsius");

export { searchCoords, fetchWeatherApi, searchWeatherApi };
