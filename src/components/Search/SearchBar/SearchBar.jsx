import { useState } from "react";
import "./SearchBar.css";
import * as WeatherAPI from "src/utils/weatherAPI.js";
/**
 * TODO:
 * - Handle case when searchInput is empty. Warn the user
 * - Handle case where they typed a weird place name (ex. 34jsdjfas)
 *
 */
function SearchBar({ setIsLoading, setSearchResults }) {
  const [searchInput, setSearchInput] = useState("");

  const handleOnSearch = async () => {
    setIsLoading(true);
    const locations = await WeatherAPI.searchCoords(searchInput);
    setIsLoading(false);
    setSearchResults(locations);
  };

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
      <button className="search__btn" onClick={handleOnSearch}>
        Search
      </button>
    </section>
  );
}
export default SearchBar;
