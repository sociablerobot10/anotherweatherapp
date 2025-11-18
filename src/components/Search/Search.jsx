import { useState } from "react";
import SearchBar from "src/components/Search/SearchBar/SearchBar.jsx";
import { SearchResults } from "src/components/Search/SearchResults/SearchResults.jsx";
import * as WeatherAPI from "src/utils/weatherAPI.js";
import "./Search.css";
export function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(`Current Loading: ${isLoading}`);
  // const fetchingCoords = async () => {
  //   setIsLoading(true);
  //   const locations = await WeatherAPI.searchCoords(searchInput);
  // };

  return (
    <section className="search-container">
      <SearchBar
        setSearchResults={setSearchResults}
        setIsLoading={setIsLoading}
      />
      {isLoading && <SearchResults isLoading={isLoading} />}
      {searchResults.length > 0 && <SearchResults locations={searchResults} />}
    </section>
  );
}
