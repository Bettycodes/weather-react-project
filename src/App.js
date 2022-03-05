import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Mek'ele" />
        <footer>
          <a
            href="https://github.com/Bettycodes/weather-react-project.git"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>{" "}
          by Bethel Girma
        </footer>
      </div>
    </div>
  );
}

export default App;