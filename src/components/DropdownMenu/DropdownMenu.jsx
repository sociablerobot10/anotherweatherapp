function DropdownMenu() {
  return (
    <>
      <div className="dropdownmenu">
        <div className="dropdownmenu__temp">
          <label>Temperature</label>
          <label className="dropdownmenu__temp-label">Temperature</label>
          <button className="dropdownmenu__temp-option">Celcius </button>
          <button className="dropdownmenu__temp-option">fahrenheit </button>
        </div>
        <label className="dropdownmenu__temp">Wind Speed</label>
        <button className="dropdownmenu__temp-option">km/h </button>
        <button className="dropdownmenu__temp-option">mph </button>
      </div>
    </>
  );
}

export default DropdownMenu;
