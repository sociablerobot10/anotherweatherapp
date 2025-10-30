import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Header from "./components/Header/Header";
import SearchBar from "./components/Search/SearchBar/SearchBar.jsx";
import WeatherProvider from "./context/WeatherProvider.jsx";

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
