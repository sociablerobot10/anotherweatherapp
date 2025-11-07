import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Header from "./components/Header/Header";
// import SearchBar from "./components/Search/SearchBar/SearchBar";

import { WeatherProvider } from "./context/WeatherProvider";
function App() {
  const [temperatureUnit, setTemperatureUnit] = useState("°C");
  const [windSpeedUnit, setWindSpeedUnit] = useState("km/h");
  const [precipitationUnit, setPrecipitationUnit] = useState("Millimeters");
  function updateTempUnit(unit) {
    setTemperatureUnit(unit);
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
          }}
        >
          <Header />
          {/* <SearchBar /> */}
        </WeatherProvider>
      </div>
    </>
  );
}

export default App;
