/**
 * Component for a list of cities the user can select from.
 * Each search result should have the city name, country
 */
export function SearchResults({ locations }) {
  return (
    <ul className="search-results">
      {locations.map((location, index) => (
        <li className="search-result" key={index}>
          <span className="search-result__name">{location.name}</span>{" "}
          {location.country}
        </li>
      ))}
    </ul>
  );
}
