import React from "react";
import "./App.scss";
import Forecast from "./components/Forecast";
import cloudDrizzle from "./images/Cloud-Drizzle-Alt.png";

function App() {
  return (
    <main className="app-container">
      <div className="location">
        <h3 className="city">Dallas, TX</h3>
        <p>Saturday, Sep 16, 2018</p>
      </div>
      <span className="date"></span>
      <div className="forecast-box">
        <div className="forecast-img">
          <div className="current-forecast">
            <h2>93&#176;</h2>
            <img
              src={cloudDrizzle}
              alt="Cloud Drizzle"
              width="44.2"
              height="39.3"
            ></img>
            <p>Partly Cloudy</p>
            <p>12 mph</p>
          </div>
        </div>
        <Forecast />
      </div>
    </main>
  );
}

export default App;
