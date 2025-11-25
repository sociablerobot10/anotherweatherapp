/**
 * Component for a list of cities the user can select from.
 * Each search result should have the city name, country
 */
import "./SearchResults.css";
import icon_loading from "assets/images/icon-loading.svg";
function SearchResults({ isLoading, locations }) {
  console.log("locations", locations);
  return (
    <ul className="search-results">
      {isLoading && (
        <li className="search-result">
          <img src={icon_loading} alt="Loading..." />
          Search in progress...
        </li>
      )}
      {locations?.map((location, index) => (
        <li className="search-result" key={index}>
          <button className="search-btn">
            <span className="search-result__name">{location.name}</span>,{" "}
            {location.admin1}, {location.country}
          </button>
        </li>
      ))}
    </ul>
  );
}
export default SearchResults;
