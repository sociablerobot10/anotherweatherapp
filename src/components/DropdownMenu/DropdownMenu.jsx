import "./DropdownMenu.css";

function DropdownMenu() {
  return (
    <>
      <form className="dropdownmenu">
        <div className="dropdownmenu__temp">
          <fieldset className="dropdownmenu__temp-group">
            <legend className="dropdownmenu__temp-heading">Temperature</legend>
            <label>
              Celsius (°C)
              <input type="radio" name="temperature" value="celsius" />
            </label>
            <label>
              Fahrenheit (°F)
              <input type="radio" name="temperature" value="fahrenheit" />
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
              <input
                type="radio"
                name="precip"
                value="inches"
                className="dropdownmenu__precip-option"
              />
              Inches (in)
            </label>
          </fieldset>
        </div>
      </form>
    </>
  );
}

export default DropdownMenu;
