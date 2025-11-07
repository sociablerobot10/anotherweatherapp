import "./DropdownMenu.css";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherProvider";
function DropdownMenu() {
  const { temperatureUnit, updateTempUnit } = useContext(WeatherContext);
  //make a function later
  console.log(temperatureUnit);
  return (
    <>
      <form className="dropdownmenu">
        <div className="dropdownmenu__temp">
          <fieldset className="dropdownmenu__temp-group">
            <legend className="dropdownmenu__temp-heading">Temperature</legend>
            <label>
              Celsius (°C)
              <input
                onChange={(e) => {
                  updateTempUnit(e.target.value);
                }}
                type="radio"
                name="temperature"
                value="°C"
              />
            </label>
            <label>
              Fahrenheit (°F)
              <input
                onChange={(e) => {
                  updateTempUnit(e.target.value);
                }}
                type="radio"
                name="temperature"
                value="°F"
              />
            </label>
          </fieldset>
        </div>
        <div className="dropdownmenu__windspeed">
          <fieldset className="dropdownmenu__windspeed-group">
            <legend className="dropdownmenu__windspeed-heading">
              Wind Speed
            </legend>
            <label className="dropdownmenu__windspeed-label">
              km/h
              <input type="radio" name="windSpeed" value="kmh" />
            </label>
            <label className="dropdownmenu__windspeed-label">
              mph
              <input type="radio" name="windSpeed" value="mph" />
            </label>
          </fieldset>
        </div>
        <div className="dropdownmenu__precip">
          <fieldset className="dropdownmenu__precip-group">
            <legend className="dropdownmenu__precip-heading">
              Precipitation
            </legend>
            <label className="dropdownmenu__precip-label">
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
