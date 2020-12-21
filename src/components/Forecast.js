import React from "react";
import cloudDrizzle from "../images/Cloud-Drizzle-Alt.png";
// import cloudDrizzleSun from "../images/Cloud-Drizzle-Sun-Alt.png";
import cloudLightning from "../images/Cloud-Lightning.png";
import cloudSun from "../images/Cloud-Sun.png";
import "./Forecast.scss";

const Forecast = ({ forecast }) => {
  const chooseWeatherIcons = (weather) => {
    let weatherIcon;
    switch (weather) {
      case weather === "Clear":
        weatherIcon = cloudSun;
        break;
      case weather === "Rain":
        weatherIcon = cloudDrizzle;
        break;
      case weather === "Clouds":
        weatherIcon = cloudSun;
        break;
      case weather === "Extreme":
        weatherIcon = cloudLightning;
        break;
      default:
        weatherIcon = cloudSun;
    }
    return weatherIcon;
  };

  const forecastDetails = forecast.slice(0, 5).map((obj, i) => {
    return (
      <div className="forecast-day" key={i}>
        <p className="day">{obj.day}</p>
        <img
          src={chooseWeatherIcons()}
          alt="Cloud Drizzle"
          width="45"
          height="47"
        ></img>
        <p className="temp">{obj.temp}&#176;</p>
      </div>
    );
  });
  return (
    <>
      <div className="forecast">{forecastDetails}</div>
    </>
  );
};

export default Forecast;
