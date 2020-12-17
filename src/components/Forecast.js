import React from "react";
import cloudDrizzle from "../images/Cloud-Drizzle-Alt.png";
import cloudDrizzleSun from "../images/Cloud-Drizzle-Sun-Alt.png";
import cloudLightning from "../images/Cloud-Lightning.png";
import cloudSun from "../images/Cloud-Sun.png";
import "./Forecast.scss";

const Forecast = () => {
  return (
    <>
      <div className="forecast">
        <div className="forecast-day">
          <p className="day">Sun</p>
          <img
            src={cloudDrizzle}
            alt="Cloud Drizzle"
            width="45"
            height="47"
          ></img>
          <p className="temp">92&#176;</p>
        </div>
        <div className="forecast-day">
          <p className="day">Mon</p>
          <img
            src={cloudDrizzleSun}
            alt="Cloud Drizzle"
            width="45"
            height="47"
          ></img>
          <p className="temp">92&#176;</p>
        </div>
        <div className="forecast-day">
          <p className="day">Tue</p>
          <img
            src={cloudLightning}
            alt="Cloud Drizzle"
            width="45"
            height="47"
          ></img>
          <p className="temp">92&#176;</p>
        </div>
        <div className="forecast-day">
          <p className="day">Wed</p>
          <img src={cloudSun} alt="Cloud Drizzle" width="45" height="47"></img>
          <p className="temp">92&#176;</p>
        </div>
        <div className="forecast-day">
          <p className="day">Thur</p>
          <img
            src={cloudDrizzle}
            alt="Cloud Drizzle"
            width="45"
            height="47"
          ></img>
          <p className="temp">92&#176;</p>
        </div>
        {/* <div className="forecast-day">
          <p>Friday</p>
          <img src={cloudLightning} alt="Cloud Drizzle"></img>
          <p>92&#176;</p>
        </div>
        <div className="forecast-day">
          <p>Saturday</p>
          <img src={cloudDrizzleSun} alt="Cloud Drizzle"></img>
          <p>92&#176;</p>
        </div> */}
      </div>
    </>
  );
};

export default Forecast;
