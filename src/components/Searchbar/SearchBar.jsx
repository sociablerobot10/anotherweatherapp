import { useState } from "react";
import "./SearchBar.css";
function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const handleOnSearch = () => {};

  return (
    <section role="search" className="search">
      <input
        className="search__input"
        type="text"
        name="search"
        id="search"
        placeholder="Search for a place..."
        onChange={(e) => {
          const value = e.target.value;
          setSearchInput(value);
        }}
      />
      <button className="search__btn">Search</button>
    </section>
  );
}
export default SearchBar;
