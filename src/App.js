
import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Mek'ele" />

        <footer>
          Coded by{" "}
            Bethel Girma
          {" "}
          <a
            href="https://github.com/Bettycodes/weather-react-project"
            target="_blank"
          >
           |  Source Code
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}