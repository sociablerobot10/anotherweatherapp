import "./header.css";
import { useState } from "react";
import Logo from "../../assets/logo.svg";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import ArrowDown from "../../assets/icon-dropdown.svg";
import GearIcon from "../../assets/icon-units.svg";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function openDropDown() {
    setIsMenuOpen(true);
  }
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav-logo">
          <img className="header__nav-logo-img" src={Logo} />
        </div>
        {isMenuOpen && <DropdownMenu />}
        <button
          onClick={() => {
            openDropDown();
          }}
          className="header__units-btn"
        >
          <img className="header__units-gear" src={GearIcon} /> Units
          <img className="header__units-arrowdown" src={ArrowDown} />
        </button>
      </nav>
      <section className="header__main">
        <h3 className="header__main-txt">How's the sky looking today?</h3>
      </section>
    </header>
  );
}
export default Header;
