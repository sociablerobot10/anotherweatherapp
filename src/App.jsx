import Header from "./components/Header/Header";
import WeatherProvider from "src/context/WeatherProvider.jsx";
import SearchBar from "src/components/Search/SearchBar/SearchBar.jsx";
import { SearchResults } from "./components/Search/SearchResults/SearchResults.jsx";
import { Search } from "./components/Search/Search.jsx";

function App() {
  return (
    <>
      <div>
        <WeatherProvider>
          <Header />
          <Search />
        </WeatherProvider>
      </div>
    </>
  );
}

export default App;
