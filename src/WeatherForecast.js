import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./App.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-2">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[4]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[5]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[6]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2d9861667d23198cb8df41266b7d62dc";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}