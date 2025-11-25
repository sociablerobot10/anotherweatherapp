import { useState, useContext } from "react";

import "./Search.css";
import SearchBar from "src/components/Search/SearchBar/SearchBar";
import SearchResults from "src/components/Search/SearchResults/SearchResults";
import { WeatherContext } from "src/context/WeatherProvider";

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const weatherAPI = useContext(WeatherContext);
  console.log(`Current Loading: ${isLoading}`);

  const searchWeather = async (location) => {
    weatherAPI.searchWeather(location);
    setSearchResults([]);
  };

  return (
    <section className="search-container">
      <SearchBar
        setSearchResults={setSearchResults}
        setIsLoading={setIsLoading}
      />
      {isLoading && <SearchResults isLoading={isLoading} />}
      {searchResults.length > 0 && (
        <SearchResults
          isLoading={isLoading}
          locations={searchResults}
          searchWeather={searchWeather}
        />
      )}
    </section>
  );
}
