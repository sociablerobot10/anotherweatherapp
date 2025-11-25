import "./DropdownMenu.css";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherProvider";
function DropdownMenu() {
  const {
    temperatureUnit,
    updateTempUnit,
    windSpeedUnit,
    updatePrecipitationUnit,
    precipitationUnit,
    updateWindSpeedUnit,
    TEMP_UNITS,
    WIND_UNITS,
    PRECIP_UNITS,
  } = useContext(WeatherContext);

  //make a function later

  return (
    <>
      <form className="dropdownmenu">
        <div className="dropdownmenu__temp">
          <fieldset className="dropdownmenu__temp-group">
            <legend className="dropdownmenu__temp-heading">Temperature</legend>
            <label for={TEMP_UNITS.CELSIUS}>
              Celsius (°C)
              <input
                id="celsius"
                onChange={(e) => {
                  updateTempUnit(e.target.value);
                }}
                type="radio"
                name="temperature"
                value={TEMP_UNITS.CELSIUS}
              />
            </label>

            <label for={TEMP_UNITS.FAHRENHEIT}>
              Fahrenheit (°F)
              <input
                id="f"
                onChange={(e) => {
                  updateTempUnit(e.target.value);
                }}
                type="radio"
                name="temperature"
                value={TEMP_UNITS.FAHRENHEIT}
              />
            </label>
          </fieldset>
        </div>
        <div className="dropdownmenu__windspeed">
          <fieldset className="dropdownmenu__windspeed-group">
            <legend className="dropdownmenu__windspeed-heading">
              Wind Speed
            </legend>
            <label for="km/h" className="dropdownmenu__windspeed-label">
              km/h
              <input
                onChange={(e) => {
                  updateWindSpeedUnit(e.target.value);
                }}
                type="radio"
                name="windSpeed"
                value="km/h"
                id="km/h"
              />
            </label>
            <label for="mph" className="dropdownmenu__windspeed-label">
              mph
              <input
                onChange={(e) => {
                  updateWindSpeedUnit(e.target.value);
                }}
                type="radio"
                id="mph"
                name="windSpeed"
                value="mph"
              />
            </label>
          </fieldset>
        </div>
        <div className="dropdownmenu__precip">
          <fieldset className="dropdownmenu__precip-group">
            <legend className="dropdownmenu__precip-heading">
              Precipitation
            </legend>
            <label
              for="mm"
              onChange={(e) => {
                updatePrecipitationUnit(e.target.value);
              }}
              type="radio"
              id="mm"
              name="precip"
              value="mm"
              className="dropdownmenu__precip-label"
            >
              {" "}
              Millimeters(mm)
              <input
                type="radio"
                name="precip"
                value="millimeters"
                className="dropdownmenu__precip-option"
              />
            </label>
            <label className="dropdownmenu__precip-label">
              Inches (in)
              <input
                type="radio"
                name="precip"
                value="inches"
                className="dropdownmenu__precip-option"
              />
            </label>
          </fieldset>
        </div>
      </form>
    </>
  );
}

export default DropdownMenu;
