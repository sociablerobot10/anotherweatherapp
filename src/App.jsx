import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Header from "./components/Header/Header";
import Search from "src/components/Search/Search";
import {
  WeatherProvider,
  TEMP_UNITS,
  WIND_UNITS,
  PRECIP_UNITS,
} from "./context/WeatherProvider";
function App() {
  const [temperatureUnit, setTemperatureUnit] = useState(TEMP_UNITS.CELSIUS);
  const [windSpeedUnit, setWindSpeedUnit] = useState(WIND_UNITS.KMH);
  const [precipitationUnit, setPrecipitationUnit] = useState(PRECIP_UNITS.MM);
  function updateTempUnit(unit) {
    setTemperatureUnit(unit);
  }
  function updateWindSpeedUnit(unit) {
    setWindSpeedUnit(unit);
  }
  function updatePrecipitationUnit(unit) {
    setPrecipitationUnit(unit);
  }
  return (
    <>
      <div>
        <WeatherProvider
          value={{
            temperatureUnit,
            windSpeedUnit,
            precipitationUnit,
            updateTempUnit,
            updateWindSpeedUnit,
            updatePrecipitationUnit,
          }}
        >
          <Header />
          <Search />
        </WeatherProvider>
      </div>
    </>
  );
}

export default App;
