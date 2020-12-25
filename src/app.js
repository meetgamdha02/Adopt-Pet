import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchBar from "./Seach";
import Details from "./Details";
import ThemeContext from "./themeContext";

const App = () => {
  const colorHook = useState("red");
  return (
    <ThemeContext.Provider value={colorHook}>
      <Router>
        <SearchBar path="/"></SearchBar>
        <Details path="/details/:id"></Details>
      </Router>
    </ThemeContext.Provider>
  );
};
render(<App />, document.getElementById("root"));
