import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
function App() {
  return (
    <>
      <div>
        <Header />
        <SearchBar />
      </div>
    </>
  );
}

export default App;
