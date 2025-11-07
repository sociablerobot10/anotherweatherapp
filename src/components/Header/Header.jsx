import "./header.css";
import { useState, useContext } from "react";
import Logo from "../../assets/logo.svg";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import ArrowDown from "../../assets/icon-dropdown.svg";
import GearIcon from "../../assets/icon-units.svg";
import { WeatherContext } from "../../context/WeatherProvider";
function Header() {
  const { temperatureUnit } = useContext(WeatherContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(temperatureUnit);
  function openDropDown() {
    setIsMenuOpen(true);
  }
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="container">
          <div className="header__nav-logo">
            <img className="header__nav-logo-img" src={Logo} />
          </div>

          <button
            onClick={() => {
              openDropDown();
            }}
            className="header__units-btn"
          >
            <img className="header__units-gear" src={GearIcon} /> Units
            <img className="header__units-arrowdown" src={ArrowDown} />
          </button>
        </div>
        {isMenuOpen && <DropdownMenu />}
      </nav>
      <section className="header__main">
        <h3 className="header__main-txt">How's the sky looking today?</h3>
      </section>
    </header>
  );
}
export default Header;
