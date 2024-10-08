import "./WeatherApp.css";
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import React, { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 304.94,
    humidity: 54,
    temp: 303.2,
    tempMax: 303.2,
    tempMin: 303.2,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div className="WeatherApp">
      <h2>Weather app</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
