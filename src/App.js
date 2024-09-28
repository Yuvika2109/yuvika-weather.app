import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import Forecast from './Forecast';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearch = async (city) => {
    const apiKey = 'd2862703fa68e3d05869839fe806ec20';
    try {
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`);
      setWeather(weatherResponse.data);

      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`);
      setForecast(forecastResponse.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Unauthorized: Please check your API key.');
      } else {
        alert('An error occurred while fetching the weather data.');
      }
      console.error('Error fetching the weather data:', error);
    }
  };

  return (
    <div id="root">
      <h1>Weather App</h1>
      <h3>Get to know about the current weather conditions all around the globe!</h3>
      <SearchBar onSearch={handleSearch} />
      {weather && (
        <>
          <WeatherCard weather={weather} />
        </>
      )}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
};

export default App;

    




