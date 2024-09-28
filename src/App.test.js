import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import WeatherGraph from './WeatherGraph';

import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [temperatureData, setTemperatureData] = useState([]);

  const handleSearch = async (city) => {
    const apiKey = 'd2862703fa68e3d05869839fe806ec20';
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`);
      setWeather(response.data);
     
      setTemperatureData([87.89, 88.5, 89.2, 90.1, 91.0]);
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
      <h1>Weather Dashboard</h1>
      <h3>Get to know about the current weather conditions all around the globe!</h3>
      <SearchBar onSearch={handleSearch} />
      {weather && (
        <>
          <WeatherCard weather={weather} />
          <WeatherGraph data={temperatureData} />
        </>
      )}
    </div>
  );
};

export default App;