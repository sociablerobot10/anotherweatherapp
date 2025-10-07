import { useState } from "react";
function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <section role="search">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for a place..."
        onChange={(e) => {
          const value = e.target.value;
          setSearchInput(value);
        }}
      />
      <button>Search</button>
    </section>
  );
}
export default SearchBar;
