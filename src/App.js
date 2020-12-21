import React, { Component } from "react";
import "./App.scss";
import Forecast from "./components/Forecast";
import cloudDrizzle from "./images/Cloud-Drizzle-Alt.png";
import _uniqBy from "lodash.uniqby";
import moment from "moment";
import { Switch } from "@material-ui/core";

const API_key = "302d513c633f66e83b6b0b25d89aab2f";

class App extends Component {
  constructor() {
    super();
    this.state = {
      forecast: [],
      unit: "imperial",
      unitChanged: false,
      todaysForecast: {},
    };
    this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getWeather();
  }

  handleChange = (event) => {
    const isCelcius = event.target.checked;

    if (isCelcius) {
      this.setState({ unit: "metric" }, () => {
        this.getWeather();
      });
    } else {
      this.setState({ unit: "imperial" }, () => {
        this.getWeather();
      });
    }
  };

  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=Dallas&units=${this.state.unit}&appid=${API_key}`
    );
    const response = await api_call.json();
    // console.log("Original response ", response.list);
    const forecast = response.list.map((obj, i) => {
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const date = new Date(obj.dt_txt);
      const day = days[date.getDay()];
      return {
        date: obj.dt_txt,
        day,
        temp: Math.round(obj.main.temp),
        weather: obj.weather[0].main,
        weatherDesc: obj.weather[0].description,
        wind: Math.round(obj.wind.speed),
      };
    });

    const simplifedForecast = _uniqBy(forecast, function (e) {
      return e.day;
    });

    this.setState({ forecast: simplifedForecast });
    this.setState({ todaysForecast: this.state.forecast[0] });

    console.log("Simplified Response ", this.state.forecast);
  };
  render() {
    return (
      <main className="app-container">
        <div className="location">
          <h3 className="city">Dallas, TX</h3>
          <p>{moment().format("dddd, MMM Do YYYY")}</p>
        </div>
        <div className="forecast-box">
          <div className="forecast-img">
            <div className="current-forecast">
              <h2>{this.state.todaysForecast.temp}&#176;</h2>
              <img
                src={cloudDrizzle}
                alt="Cloud Drizzle"
                width="44.2"
                height="39.3"
              ></img>
              <div className="weather-desc">
                <p>{this.state.todaysForecast.weatherDesc}</p>
                <p>{this.state.todaysForecast.wind} mph</p>
              </div>
            </div>
            <div className="unit-switch">
              <span>F&#176;</span>
              <Switch
                class="switch"
                onChange={(e) => this.handleChange(e)}
                name="changeUnit"
              />
              <span>C&#176;</span>
            </div>
          </div>
          <Forecast forecast={this.state.forecast} />
        </div>
      </main>
    );
  }
}

export default App;
