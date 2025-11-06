import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Header from "./components/Header/Header";
import WeatherProvider from "src/context/WeatherProvider.jsx";
import SearchBar from "src/components/Search/SearchBar/SearchBar.jsx";

function App() {
  return (
    <>
      <div>
        <WeatherProvider>
          <Header />
          <SearchBar />
        </WeatherProvider>
      </div>
    </>
  );
}

export default App;
