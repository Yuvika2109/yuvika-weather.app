import React from 'react';
import './App.css';

const Forecast = ({ forecast }) => {
  const forecastDays = forecast.list.filter((reading) => reading.dt_txt.includes("18:00:00"));

  return (
    <div className="forecast">
      {forecastDays.map((day, index) => (
        <div key={index} className="forecast-day">
          <h3>{new Date(day.dt_txt).toLocaleDateString()}</h3>
          <img
            className="weather-icon"
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p>Temp: {day.main.temp} °F</p>
          <p>Wind: {day.wind.speed} mph</p>
          <p>Humidity: {day.main.humidity} %</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
