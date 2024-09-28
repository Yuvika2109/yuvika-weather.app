import React from 'react';
import './App.css';

const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <img
        className="weather-icon"
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <p>Temperature: {weather.main.temp} °F</p>
      <p>Wind Speed: {weather.wind.speed} mph</p>
      <p>Humidity: {weather.main.humidity} %</p>
    </div>
  );
};

export default WeatherCard;

