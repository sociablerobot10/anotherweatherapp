import { useState, useContext } from "react";
import "./SearchBar.css";

import { WeatherContext } from "src/context/WeatherProvider";
/**
 * TODO:
 * - Handle case when searchInput is empty. Warn the user
 * - Handle case where they typed a weird place name (ex. 34jsdjfas)
 *
 */
export default function SearchBar({ setIsLoading, setSearchResults }) {
  const [searchInput, setSearchInput] = useState("");
  const weatherAPI = useContext(WeatherContext);

  const handleOnSearch = async () => {
    if (searchInput == "") {
      alert("Empty, input something");
      return;
    }
    setIsLoading(true);

    const locations = await weatherAPI.searchCoords(searchInput);
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
